import logo from './logo.svg';
import './App.css';
import Form from "@rjsf/material-ui";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const schema = {
    "title": "EUREKA Knowledge Object Upload Form",
    "description": "Single object upload form for the EUREKA Farmbook. For large automated large scale uploads of already structured metadata, please contact ...",
    "type": "object",
    "required": [
      "Category",
      "Title",
      "Description",
      "Keywords",
      "Creators"
    ],
    "properties": {
      "Project Name": {
        "type": "string",
        "title": "The project under which the knowledge object was created.",
        "default": ""
      },
      "Project Acronym": {
        "type": "string",
        "title": "The acronym of the project under which the knowledge object was created.",
        "default": ""
      },
      "Project URL": {
        "type": "string",
        "title": "The main URL of the project under which the knowledge object was created.",
        "default": ""
      },
      "Knowledge Object URL": {
        "type": "string",
        "title": "Please provide the URL to the knowledge object.",
        "default": ""
      },
      "Knowledge Object URL": {
        "type": "string",
        "title": "Please provide the URL to the knowledge object.",
        "default": ""
      },
      "Knowledge Object URL": {
        "type": "string",
        "title": "Please provide the URL to the knowledge object.",
        "default": ""
      },
      "Category": {
        "type": "string",
        "title": "Category",
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
      "Title": {
        "type": "string",
        "title": "Please provide the title of the knowledge object.",
        "default": ""
      },
      "Description": {
        "type": "string",
        "title": "Please provide a summary of the knowledge object.",
        "default": ""
      },
      "Keywords": {
        "title": "Keywords",
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "Creators": {
        "title": "Creator(s)",
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "Languages": {
        "title": "Language(s)",
        "type": "array",
        "items": 
          {
            "title": "Language",
            "type": "string",
            "default": "English",
            "enum": ["Dutch",
                    "English"
            ]
          }
      },
      "CreationDate": {
        "title": "Date of Creation",
        "description": "The date on which the knowledge object was created.",
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "format": "date"
          }
        }
      },
      "CreationDate": {
        "title": "Date of Creation",
        "description": "The date on which the knowledge object was created.",
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "format": "date"
          }
        }
      },
      "License": {
        "type": "string",
        "title": "License",
        "description": "The license under which the object will be shared.",
      },
      "Type": {
        "title": "Type",
        "type": "array",
        "items": 
          {
            "title": "Language",
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
      "PotentialAction": {
        "type": "string",
        "title": "Potential Action",
        "enum": ["Access to Data",
                "Communication",
                "Dissemination",
                "Education/Training"]
      },
      "Subject": {
        "type": "string",
        "title": "Subject",
        "enum": ["Access to Data",
                "Communication",
                "Dissemination",
                "Education/Training"]
      },
      "Place": {
        "type": "string",
        "title": "Subject",
        "enum": ["Access to Data",
                "Communication",
                "Dissemination",
                "Education/Training"]
      },
    }
  };
  const uiSchema = {
    "Description": {
      "ui:widget": "textarea"
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
  };
  const formData = {
    "boolean": {
      "default": true,
      "radio": true,
      "select": true
    },
    "firstName": "Chuck",
    "lastName": "Norris",
    "age": 75,
    "bio": "Roundhouse kicking asses since 1940",
    "password": "noneed"
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <div className="App p-5">
      <Form className="col-md-6 offset-md-3" schema={schema}
            uiSchema={uiSchema}
            formData={formData}
            onChange={log("changed")}
            onSubmit={log("submitted")}
            onError={log("errors")}
            />
    </div>
  );
}

export default App;
