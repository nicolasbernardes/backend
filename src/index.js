/* const fs = require('fs');
const ruta = 'C:/Users/FERNANDO/Desktop/Nicolas beltrao/product.txt'; 

module.exports = class Contenedor {  
    constructor(id,titulo,precio,thumbnail){ 
        this.id = id;
        this.titulo = titulo;
        this.precio = precio;
        this.thumbnail = thumbnail;
    }    
    async escribir(texto){
        try{
            await fs.promises.writeFile(ruta,texto);
            texto!='' ? console.log('Guardado') : console.log('Archivo eliminado'); 
        }
        catch (err){    
            console.log(err)
        }
    }
    async getAll(){
        try {
            
            let contenido =await fs.promises.readFile(ruta, 'utf-8');
            
            if(contenido && contenido.length>0){
                contenido=JSON.parse(contenido);
                return contenido;
            }else{throw "Sin contenido"}
         }
        catch(err){
            console.log('No se conseguio leer el archivo, se creara uno nuevo');
        }
    }    
    async getById(number){
        const productos=await this.getAll();
        return productos.filter(x=>x.id==number);
    }
    async deleteById(number){
       
            let productos=await this.getAll();
            productos = productos.filter(x => x.id!=number);
            this.escribir(JSON.stringify(productos));
    }
    async deleteAll(){
        this.escribir('');
    }
   async verificarID(){
    try {
        let contenido = await fs.promises.readFile(ruta, 'utf-8');
      
        if(contenido && contenido.length>0){
            contenido=JSON.parse(contenido);
            let ultimoId=contenido[contenido.length-1].id; 
            return ultimoId+1;
        }else { 
            console.log('vacio');
            return 1; 
        }
    }
    catch(err){
        console.log('Error',err);
    }

   }
   async save(producto){
    try {
        if(producto!=undefined){ 
           
            producto.id = await this.verificarID();
            let productos = await this.getAll();
            if(!Array.isArray(productos)) productos = []; 

            productos.push(producto);
            productos = JSON.stringify(productos);
            this.escribir(productos)
            return producto.id; 
        }else{
             throw "No recibio un objeto" 
        }
    } catch (err) {
        console.warn("Error",err);
    
    }

}

}
 */









// entrega 4

/* const res = require("express/lib/response");
const path = require("path");
const express = requiere("express");
const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`server on http://localhost:${PORT}`)
});

app.get("/", (req, res, next) => {
    console.log(req.params);
    res.sendFile(path.join(__dirname + "/index.js"));
});



server.on("error", error => console.log(error)); */