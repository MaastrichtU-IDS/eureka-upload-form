import './App.css';
import Form from "@rjsf/material-ui";
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './FireBase';

function App() {
  function submitForm({formData}, e) {
    console.log("Data submitted: ",  formData);
    formData.KnowledgeObjectLocation.File = formData.KnowledgeObjectLocation.File.substring(0,100);
    firebase.firestore().collection('knowledge-objects')
    .add(formData);
  }

  function transformErrors(errors) {
    return errors.map(error => {

      if (error.name === "enum") {
        error.message = ""
      }
      if (error.name === "required") {
        error.message = "Please provide a value for this field"
      }
      if (error.name === "format" || error.name === "pattern") {
        error.message = "Please provide the correct format for this field"
      }
      if (error.name === "pattern") {
        error.message = "Please make sure the url starts with http:// or https://"
      }
      if (error.name === "oneOf") {
        error.message = ""
      }
      return error;
    });
  }

  function validate(formData, errors) {
  if(formData.Title && formData.Title.length > 100) {
    errors.Title.addError("Please provide a shorter title");
  }
  if (formData.ProjectName && formData.ProjectName.length > 100) {
    errors.ProjectName.addError("Please provide a shorter project name");
  }
  if (formData.ProjectAcronym && formData.ProjectAcronym.length > 5) {
    errors.ProjectAcronym.addError("Please provide a shorter project acronym");
  }
  if (formData.ProjectURL && formData.ProjectURL.length > 2000) {
    errors.ProjectURL.addError("Please provide a shorter project URL");
  }
  if(formData.Description && formData.Description.length > 500) {
    errors.Description.addError("Please provide a shorter description");
  }
  return errors;
}

  const schema = {
    "title": "EUREKA Knowledge Object Upload Form",
    "description": "Single object upload form for the EUREKA Farmbook. For large automated large scale uploads of already structured metadata, please contact us on the #eureka-development slack channel.",
    "type": "object",
    "required": [
      "KnowledgeObjectLocation",
      "Title",
      "Description",
      "ProjectName",
      "ProjectAcronym",
      "ProjectURL",
      "Category",
      "Keywords",
      "Creators",
      "Languages",
      "KnowledgeObjectDate",
      "IntendedPurpose",
      "GeographicalLocations"
    ],
    "definitions": {
      "license":{
        "type": "object",
        "properties": {
          "Under which license will the knowledge object be made available?": {
            "type": "string",
            "enum": ["CC BY",
            "CC BY-SA",
            "CC BY-NC",
            "CC BY-NC-SA",
            "CC BY-ND",
            "CC BY-NC-ND", 
            "Other"]
            ,
            "default": "CC BY"
          }
        },
        "required": [
          "Under which license will the knowledge object be made available?"
        ],
        "dependencies": {
          "Under which license will the knowledge object be made available?": {
            "oneOf": [
              {
                "properties": {
                  "Under which license will the knowledge object be made available?": {
                    "enum": [
                      "Other"
                    ]
                  },
                  "License URL": {
                    "type": "string",
                    "format": "uri",
                    "pattern": "^http.?://",
                    "title": "Please provide the URL to the license"
                  }
                },
                "required": [
                  "License URL"
                ],
              },
              {
                "properties": {
                  "Under which license will the knowledge object be made available?": {
                    "enum": [
                    "CC BY",
                    "CC BY-SA",
                    "CC BY-NC",
                    "CC BY-NC-SA",
                    "CC BY-ND",
                    "CC BY-NC-ND", ]
                  }
                }
              }
            ]
          }
        }
      },
      "completiondate":{
        "type": "object",
        "properties": {
          "Is the date of completion for the object available?": {
            "type": "string",
            "enum": ["I only know the year of completion",
            "I have the exact date available"
          ]
            ,
            "default": "I have the exact date available"
          }
        },
        "required": [
          "Is the date of completion for the object available?"
        ],
        "dependencies": {
          "Is the date of completion for the object available?": {
            "oneOf": [
              {
                "properties": {
                  "Is the date of completion for the object available?": {
                    "enum": [
                      "I have the exact date available"
                    ]
                  },
                  "ExactDate": {
                    "title": "Day of Completion",
                    "description": "The day on which work on the knowledge object was completed",
                    "type": "object",
                    "properties": {
                      "date": {
                        "type": "string",
                        "format": "date"
                      }
                    },
                    "required": [
                      "date"
                    ],
                  }
                },
                "required": [
                  "ExactDate"
                ],
              },
              {
                "properties": {
                  "Is the date of completion for the object available?": {
                    "enum": [
                    "I only know the year of completion"
                  ]
                  },
                  "yearOfCompletion": {
                    "title": "Year of Completion",
                    "type": "integer",
                    "minimum": 1900,
                    "maximum": 2100
                  },
                },
                "required": [
                  "yearOfCompletion"
                ],
              }
            ]
          }
        }
      },
      "location": {
        "title": "Location",
        "type": "object",
        "properties": {
          "Is your knowledge object available online?": {
            "type": "string",
            "enum": [
              "Yes, I will provide the URL to the object",
              "No, I will upload the object from my local drive",
            ],
            "default": "Yes, I will provide the URL to the object"
          }
        },
        "required": [
          "Is your knowledge object available online?"
        ],
        "dependencies": {
          "Is your knowledge object available online?": {
            "oneOf": [
              {
                "properties": {
                  "Is your knowledge object available online?": {
                    "enum": [
                      "No, I will upload the object from my local drive"
                    ]
                  },
                  "File": {
                    "type": "string",
                    "format": "data-url",
                    "title": "the file to upload as a knowledge object"
                  }
                },
                "required": [
                  "File"
                ],
              },
              {
                "properties": {
                  "Is your knowledge object available online?": {
                    "enum": [
                      "Yes, I will provide the URL to the object"
                    ]
                  },
                  "Knowledge Object URL": {
                    "type": "string",
                    "format": "uri",
                    "pattern": "^http.?://",
                    "description": "the URL to the knowledge object"
                  }
                },
                "required": [
                  "Knowledge Object URL"
                ]
              }
            ]
          }
        }
      }
    },
    "properties": {
      "KnowledgeObjectLocation": {
        "title": "Knowledge Object",
        "$ref": "#/definitions/location"
      },
      "Title": {
        "type": "string",
        "title": "Title",
        "description": "The title of the knowledge object",
      },
      "Description": {
        "type": "string",
        "title": "Description",
        "description": "A short (500 character or around 100 words) summary of the knowledge object."
      },
      "ProjectName": {
        "type": "string",
        "title": "Project Name",
        "description": "The project under which the knowledge object was created"
      },
      "ProjectAcronym": {
        "type": "string",
        "title": "Project Acronym",
        "description": "The acronym of the project under which the knowledge object was created"
      },
      "ProjectURL": {
        "type": "string",
        "title": "Project URL",
        "description": "The main URL of the project under which the knowledge object was created"
      },
      "Category": {
        "type": "string",
        "title": "Category",
        "description": "The category that best fits the type of the supplied knowledge object",
        "enum": ["Document",
        "Spreadsheet",
        "Presentation",
        "Video",
        "Podcast",
        "Image",
        "Software Application",
        "Dataset"
        ]
      },
      "Keywords": {
        "title": "Keywords",
        "description": "Please provide a list of keywords indicative of the content of the object",
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "Creators": {
        "title": "Creators",
        "description": "Provide the name(s) of the creator(s) of the object",
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "Languages": {
        "title": "Languages",
        "description": "Please provide the language(s) in which the knowledge object is available. In case translations of the object are seperate files or pages, please handle each translation as it's own object.",
        "type": "array",
        "items": 
          {
            "title": "Language",
            "type": "string",
            "default": "English",
            "enum": ["Bulgarian",
            "Croatian",
            "Czech",
            "Danish",
            "Dutch",
            "English",
            "Estonian",
            "Finnish",
            "French",
            "German",
            "Greek",
            "Hungarian",
            "Irish",
            "Italian",
            "Latvian",
            "Lithuanian",
            "Maltese",
            "Polish",
            "Portuguese",
            "Romanian",
            "Slovak",
            "Slovene",
            "Spanish",
            "Swedish"]
          }
      },
      "License": {
        "title": "License",
        "$ref": "#/definitions/license"
      },
      "Type": {
        "title": "Type",
        "type": "array",
        "items": 
          {
            "type": "string",
            "default": "English",
            "enum": ["article in conference proceedings",
            "book",
            "booklet",
            "brochure/flyer",
            "chapter in edited volume",
            "deliverable report",
            "factsheet",
            "handbook",
            "guide",
            "journal article",
            "manual",
            "milestone report",
            "newsletter",
            "practice abstract",
            "press release",
            "spreadsheet",
            "review document",
            "report/paper",
            "technical article",
            "technical information/ specifications card",
            "tutorial",
            "other"]
          }
      },
      "IntendedPurpose": {
        "type": "string",
        "title": "Intended Purpose",
        "enum": ["Access to Data",
                "Communication",
                "Dissemination",
                "Education/Training"]
      },
      "KnowledgeObjectDate": {
        "title": "Completion Date",
        "$ref": "#/definitions/completiondate"
      },
      "GeographicalLocations": {
        "title": "Geographical Location(s)",
        "description": "Please select all European countries referenced in the knowledge object's contents.",
        "type": "array",
        "items": 
          {
            "title": "Language",
            "type": "string",
            "default": "English",
            "enum": ["Austria",
                       "Belgium",
                       "Bulgaria",
                       "Croatia",
                       "Cyprus",
                       "Czechia",
                       "Denmark",
                       "Estonia",
                       "Finland",
                       "France",
                       "Germany",
                       "Greece",
                       "Hungary",
                       "Ireland",
                       "Italy",
                       "Latvia",
                       "Lithuania",
                       "Luxembourg",
                       "Malta",
                       "Netherlands",
                       "Poland",
                       "Portugal",
                       "Romania",
                       "Slovakia",
                       "Slovenia",
                       "Spain",
                       "Sweden"]
          },
      }
    }
  };
  const uiSchema = {
    Description: {
      "ui:widget": "textarea",
      "ui:help": (
        <div>
          <a href="#">test</a>
        </div>
      )
    },
    "Keywords": {
      "ui:options": {
        "orderable": false
      }
    },
    "Languages": {
      "ui:options": {
        "orderable": false
      }
    },
    "fixedArrayOfConditionals": {
      "items": {
        "Do you want to get rid of any?": {
          "ui:widget": "radio"
        }
      }
    }
  };
  const formData = {
    //testdata
    // "Keywords": [
    //     "fdsa"
    // ],
    // "Creators": [
    //     "asdf"
    // ],
    // "Languages": [
    //     "German"
    // ],
    // "License": {
    //     "Under which license will the knowledge object be made available?": "CC BY"
    // },
    // "Type": [
    //     "handbook"
    // ],
    // "KnowledgeObjectDate": {
    //     "Is the date of completion for the object available?": "I have the exact date available",
    //     "ExactDate": {
    //         "date": "2021-06-05"
    //     }
    // },
    // "GeographicalLocations": [
    //     "Finland"
    // ],
    // "Title": "fdsafdsafas",
    // "ProjectName": "MyProjectName",
    // "ProjectAcronym": "MPN",
    // "ProjectURL": "https://mpn.com",
    // "Category": "Presentation",
    // "IntendedPurpose": "Communication",
    // "Description": "fdsfasdfsadadsfdsfafdsfdsdsafdsfassfdfd"
};

  const log = (type) => console.log.bind(console, type);
  return (
    <div className="App p-5">
      <Form className="col-md-6 offset-md-3" schema={schema}
            uiSchema={uiSchema}
            formData={formData}
            onChange={log("changed")}
            onSubmit={submitForm}
            onError={log("errors")}
            showErrorList={false}
            validate={validate}
            liveValidate
            transformErrors={transformErrors}
            />
    </div>
  );
}

export default App;
