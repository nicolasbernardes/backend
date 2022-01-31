const express = require("express")
const app = express()
let { config } = require("../config")
const port = process.env.port || 3000
let fs = require("fs")
let pug = require("pug")
const hbs = require ("express-handlebars")

app.engine("nicolas", async (filepath, option, callback) =>{
    try{
        const content = await fs.promises.readFile(filepath)
        const rendered = content.toString()
        .replace('^^titulo$$',`${option.titulo}`)
        .replace('^^mensaje$$',`${option.mensaje}`)
        .replace('^^autor$$',`${option.autor}`)
        .replace('^^version$$',`${option.version}`)

        return(null, rendered)
        
    } catch (error){
        return callback(new Error(error))

    }
})

app.set("views", "./views/custom")
app.set("views engine", "gab")


app.get("/" , (req,res,next) =>{

    let data = {
        titulo: "Harry Potter y la piedra filosofal",
        mensaje: "Harry Potter y la piedra filosofal es el primer volumen de la ya clásica serie de novelas fantásticas de la autora británica J.K. Rowling",
        autor: "J. K. Rowling",
        version: 1
    }
    
    res.send("okkk")
})


app.listen(port, err =>{
    console.log(`server on http://localhost:${port}`)
})