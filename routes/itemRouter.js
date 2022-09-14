const express = require('express')
const itemRouter = express.Router()
const {v4: uuid4} = require("uuid")


itemRouter.use("/", (req, res, next) => {
    console.log("THE ITEMS MIDDLEWARE WAS EXECUTED")
    next()
})

itemRouter.use("/", (req, res, next) => {
    req.body = {
        firstName: "Cotton-Eye",
        lastName: "Joe",
        origin: "unknown",
        _id: uuid4()
    }
    console.log("THE ITEMS MIDDLEWARE WAS EXECUTED AGAIN")
    next()
})

itemRouter.get("/", (req, res, next) => {
    console.log("GET REQUEST RECEIVED")
    res.send(req.body)
})

module.exports = itemRouter