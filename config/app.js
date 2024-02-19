const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express()

const contactRouter = require('../routes/contacts')
const authRouter = require('../routes/auth')

// Middle Ware
app.use(cors("*"))
app.use(morgan("dev"))
app.use(express.json())

// routes
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Success",
        data: "None"
    })
})

app.use("/api/v1/contacts/", authRouter)
app.use("/api/v1/contacts/", contactRouter)

module.exports = app