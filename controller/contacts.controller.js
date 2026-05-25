import contact from "../models/contacts.model.js";
import mongoose from "mongoose";

// Show all contacts
export const getContacts = async (req, res) => {
  try {
    const contacts = await contact.find();
    res.render("home", { contacts });
  } catch (error) {
    res.render("500", { message: error.message });
  }
};

// Show single contact details
export const getSingleContact = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.render("404", { message: "Invalid ID" });
  }

  try {
    const singleContact = await contact.findById(req.params.id);
    if (!singleContact) {
      return res.render("404", { message: "Contact Not Found" });
    }
    res.render("show-contact", { singleContact });
  } catch (error) {
    res.render("500", { message: error.message });
  }
};

// Show Add Contact Page
export const addContactPage = (req, res) => {
  res.render("add-contact");
};

// Add Contact Data Processing using POST method
export const addContact = async (req, res) => {
  try {
    await contact.create(req.body);
    res.redirect("/");
  } catch (error) {
    res.render("500", { message: error.message });
  }
};

// Show Contact Details on Update Page
export const updateContactPage = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.render("404", { message: "Invalid ID" });
  }

  try {
    const singleContact = await contact.findById(req.params.id);
    if (!singleContact) {
      return res.render("404", { message: "Contact Not Found" });
    }
    res.render("update-contact", { singleContact });
  } catch (error) {
    res.render("500", { message: error.message });
  }
};

// Update Contact Details
export const updateContact = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.render("404", { message: "Invalid ID" });
  }

  // This shortcut method can be used only if the name of form fields and name of the database collection fields are same
  // await contact.findByIdAndUpdate(req.params.id, req.body);

  // If not same
  // const { first_name, last_name, email, phone, address} = req.body;
  // await contact.findByIdAndUpdate(req.params.id, { first_name, last_name, email, phone, address});

  try {
    const isUpdated = await contact.findByIdAndUpdate(req.params.id, req.body);
    if (!isUpdated) {
      return res.render("404", { message: "Contact Not Updated" });
    }
    res.redirect("/");
  } catch (error) {
    res.render("500", { message: error.message });
  }
};

// Delete contact
export const deleteContact = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.render("404", { message: "Invalid ID" });
  }

  try {
    const isDeleted = await contact.findByIdAndDelete(req.params.id);
    if (!isDeleted) {
      return res.render("404", { message: "Contact Not Found" });
    }
    res.redirect("/");
  } catch (error) {
    res.render("500", { message: error.message });
  }
};
