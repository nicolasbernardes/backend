const res = require("express/lib/response");
const path = require("path");
const express = requiere("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res, next) => {
    console.log(req.params);
    res.sendFile(path.join(__dirname + "/index.js"));
});


const server = app.listen(PORT, () => {
    console.log(`server on http://localhost:${PORT}`)
});

server.on("error", error => console.log(error));

