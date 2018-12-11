import { Template } from "meteor/templating";
import base from "../import/db/base"

Template.view.helpers({
    base : function() {
        return base.find();
    }
});