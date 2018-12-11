import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


if (Meteor.isClient) {

  Template.form.events({

    'submit form': function(event) {
      event.preventDefault();
      var textValue = event.target.name.value;
      console.log(textValue);
      event.target.submit.value = "";
    }
  });
}
