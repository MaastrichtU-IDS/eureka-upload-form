(this["webpackJsonpprototype-upload-form"]=this["webpackJsonpprototype-upload-form"]||[]).push([[0],{290:function(e,t,o){},291:function(e,t,o){},530:function(e,t,o){"use strict";o.r(t);var i=o(0),a=o.n(i),n=o(13),r=o.n(n),c=(o(290),o(52)),l=(o(291),o(270)),s=(o(528),o(67));var d=function(){var e,t={title:"EUREKA Knowledge Object Upload Form",description:"Single object upload form for the EUREKA Farmbook. For large automated large scale uploads of already structured metadata, please contact ...",type:"object",required:["Category","Title","Description","Keywords","Creators"],definitions:{location:{title:"Location",type:"object",properties:{"Is your knowledge object available online?":{type:"string",enum:["Yes, I will provide the URL to the object.","No, I will upload the object from my local drive."],default:"Yes, I will provide the URL to the object."}},required:["Is your knowledge object available online?"],dependencies:{"Is your knowledge object available online?":{oneOf:[{properties:{"Is your knowledge object available online?":{enum:["No, I will upload the object from my local drive."]},File:{type:"string",format:"data-url",title:"Please provide the file to upload as a knowledge object."}}},{properties:{"Is your knowledge object available online?":{enum:["Yes, I will provide the URL to the object."]},"Knowledge Object URL":{type:"string",title:"Please provide the URL to the knowledge object.",default:""}},required:["Knowledge Object URL"]}]}}}},properties:(e={"Knowledge Object Location":{title:"Knowledge Object Location",$ref:"#/definitions/location"},"Project Name":{type:"string",title:"The project under which the knowledge object was created.",default:""},"Project Acronym":{type:"string",title:"The acronym of the project under which the knowledge object was created.",default:""},"Project URL":{type:"string",title:"The main URL of the project under which the knowledge object was created.",default:""},Category:{type:"string",title:"Category",enum:["Document","Spreadsheet","Presentation","Video","Podcast","Image","Software Application","Dataset"]},Title:{type:"string",title:"Please provide the title of the knowledge object.",default:""},Description:{type:"string",title:"Please provide a summary of the knowledge object.",default:""},Keywords:{title:"Keywords",type:"array",items:{type:"string"}},Creators:{title:"Creator(s)",type:"array",items:{type:"string"}},Languages:{title:"Language(s)",type:"array",items:{title:"Language",type:"string",default:"English",enum:["Dutch","English"]}},CreationDate:{title:"Date of Creation",description:"The date on which the knowledge object was created.",type:"object",properties:{date:{type:"string",format:"date"}}}},Object(c.a)(e,"CreationDate",{title:"Date of Creation",description:"The date on which the knowledge object was created.",type:"object",properties:{date:{type:"string",format:"date"}}}),Object(c.a)(e,"License",{type:"string",title:"License",description:"The license under which the object will be shared."}),Object(c.a)(e,"Type",{title:"Type",type:"array",items:{title:"Language",type:"string",default:"English",enum:["article in conference proceedings","book","booklet","brochure/flyer","chapter in edited volume","deliverable report","factsheet","handbook","guide","journal article","manual","milestone report","newsletter","practice abstract","press release","spreadsheet","review document","report/paper","technical article","technical information/ specifications card","tutorial","other"]}}),Object(c.a)(e,"PotentialAction",{type:"string",title:"Potential Action",enum:["Access to Data","Communication","Dissemination","Education/Training"]}),Object(c.a)(e,"Subject",{type:"string",title:"Subject",enum:["Access to Data","Communication","Dissemination","Education/Training"]}),Object(c.a)(e,"Place",{type:"string",title:"Subject",enum:["Access to Data","Communication","Dissemination","Education/Training"]}),e)},o=function(e){return console.log.bind(console,e)};return Object(s.jsx)("div",{className:"App p-5",children:Object(s.jsx)(l.a,{className:"col-md-6 offset-md-3",schema:t,uiSchema:{Description:{"ui:widget":"textarea"},Keywords:{"ui:options":{orderable:!1}},Languages:{"ui:options":{orderable:!1}},fixedArrayOfConditionals:{items:{"Do you want to get rid of any?":{"ui:widget":"radio"}}}},formData:{},onChange:o("changed"),onSubmit:o("submitted"),onError:o("errors")})})},p=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,568)).then((function(t){var o=t.getCLS,i=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;o(e),i(e),a(e),n(e),r(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),p()}},[[530,1,2]]]);
//# sourceMappingURL=main.9bde81d3.chunk.js.map