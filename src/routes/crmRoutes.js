import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
} from "../controlers/crmController";

const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next) => {
      //middleware
      console.log(`Request from ${req.originalUrl}`);
      console.log(`Request type ${req.method}`);
      next();
    }, getContacts)
    .post(addNewContact);

  app
    .route("/contact/:contactID")
    .get(getContactWithID)
    .put(updateContact)
    .delete((req, res) => res.send("DELETE request successfull!"));
};

export default routes;
