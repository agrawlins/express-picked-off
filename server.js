const express = require("express")
const app = express()

//req = request, res = response

//Middleware
app.use(express.json()) //Looks for a request body, and turns it into 'req.body'
app.use("/items", require("./routes/itemRouter.js"))

//ROUTES


app.listen(3000, () => {
    console.log("The server is running on Port 3000")
})