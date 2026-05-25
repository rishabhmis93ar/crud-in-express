import contact from "../models/contacts.model.js";

export const getContacts = async (req, res) => {
  const contacts = await contact.find();
  res.render("home", { contacts });
};

export const getSingleContact = async (req, res) => {
  const singleContact = await contact.findById(req.params.id);
  res.render("show-contact", { singleContact });
};

export const addContactPage = (req, res) => {
  res.render("add-contact");
};

export const addContact = async (req, res) => {
  await contact.create(req.body);
  res.redirect("/");
};

export const updateContactPage = async (req, res) => {
  const singleContact = await contact.findById(req.params.id);
  res.render("update-contact", { singleContact });
};

export const updateContact = async (req, res) => {
  // This shortcut method can be used only if the name of form fields and name of the database collection fields are same
  await contact.findByIdAndUpdate(req.params.id, req.body);

  // If not same
  // const { first_name, last_name, email, phone, address} = req.body;
  // await contact.findByIdAndUpdate(req.params.id, { first_name, last_name, email, phone, address});

  res.redirect("/");
};

export const deleteContact = async (req, res) => {
  await contact.findByIdAndDelete(req.params.id);
  res.redirect("/");
};
