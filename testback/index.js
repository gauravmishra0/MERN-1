const express = require("express");

const app = express();

const port = 2001;

app.get("/", (req, res) => {
    return res.send("Hey man!")
});
app.get("/login", (req, res) => {
    return res.send("You are logged  in!")
});
app.get("/sign-out", (req, res) => {
    return res.send("You are signed out!")
});
app.get("/hitesh", (req, res) => {
    return res.send("IG fan")
});

app.listen(port, () =>{
    console.log("Boom your first server");
})