const Contact = require('../models/Contact')

exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find()

        if(!contacts) {
            throw new Error()
        }

        res.status(200).json({
            message: "success",
            total: contacts.length,
            data: {
                contacts
            }
        })

    } catch (error) {
        console.error(error)

        res.status(400).json({
            message: "failure",
            details: error.message
        })
    }
}


exports.addContact = async (req, res) => {
    const payload = req.body

    try {
        const contact = await Contact.create(payload)

        if(!contact) {
            throw new Error("failure creating new contact")
        }

        res.status(201).json({
            message: "success",
            data: {
                task: `Added ${payload.email} to database`,
                details: payload
            }
        })
    } catch (error) {
        console.error(error)

        res.status(400).json({
            message: "failure",
            details: error.message
        })
    }
}



exports.editContact = async (req, res) => {
    
    const contactID = req.params.id;
    const payload = req.body

    try {
        const contact = await Contact.findByIdAndUpdate(contactID, payload, {
            new: true
        })

        if(!contact) {
            throw new Error("failure creating new contact")
        }

        res.status(201).json({
            message: "success",
            data: {
                task: `Edited ${contact.email} in database`,
                details: contact
            }
        })
    } catch (error) {
        console.error(error)

        res.status(400).json({
            message: "failure",
            details: error.message
        })
    }
}


exports.deleteContact = async (req, res) => {
    
    const contactID = req.params.id;
    
    try {
        const contact = await Contact.findByIdAndDelete(contactID)

        if(!contact) {
            throw new Error("failure deleting contact")
        }

        res.status(201).json({
            message: "success",
            data: {
                task: `deleted ${contactID} from database`,
                details: null
            }
        })
    } catch (error) {
        console.error(error)

        res.status(400).json({
            message: "failure",
            details: error.message
        })
    }
}