const res = require("express/lib/response");

const express = requiere("express")
const app = express();
const PORT = 8080;

app.get("/", (req, res, next) => {
    console.log(req.params);
    res.send("hola desde express")
})


const server = app.listen(PORT, () => {
    console.log(`server on http://localhost:${PORT}`)
})

server.on("error", error => console.log(error))