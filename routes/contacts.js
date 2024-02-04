const router = require('express').Router()
const contactCtl = require('../controllers/contacts')

router
    .route('/')
    .get(contactCtl.getContacts)
    .post(contactCtl.addContact)

router
    .route("/:id")
    .patch(contactCtl.editContact)
    .delete(contactCtl.deleteContact)


module.exports = router