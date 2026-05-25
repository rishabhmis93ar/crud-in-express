import express from "express";
import { 
    addContact, 
    addContactPage, 
    deleteContact, 
    getContacts, 
    getSingleContact, 
    updateContact, 
    updateContactPage } 
    from "../controller/contacts.controller.js";
const router = express.Router();

// Routes
router.get('/', getContacts);

router.get('/show-contact/:id', getSingleContact);

router.get('/add-contact', addContactPage);

router.post('/add-contact', addContact);

router.get('/update-contact/:id', updateContactPage);

router.post('/update-contact/:id', updateContact);

router.get('/delete-contact/:id', deleteContact);


export default router;