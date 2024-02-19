

const express = require("express");
const app = express();
let PORT = 3000;

const sendmail = require("./controler/sendmail")

app.get("/", (req, res) => {
    res.send("Server");
}
);

app.get("/mail", sendmail);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log("live port 3000");
        })
    }
    catch (error) { }
}


start();