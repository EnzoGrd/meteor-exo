import { Meteor } from 'meteor/meteor';
import base from "../import/db/base"

Meteor.startup(() => {
  // code to run on server at startup
  {
    base.insert
    (
      {
        firstName: "Stan",
        lastName: "Lee"
      }
    )
  }
});
