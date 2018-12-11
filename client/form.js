import  { Template } from "meteor/templating";
import base from "../import/db/base"

Template.form.events

Template.form.events
({"click #button" : function(event, template) {
    base.insert({
      name : template.find( "#name" ).value,
    }
  )}
})