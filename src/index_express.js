const express = require('express');
const { use } = require('express/lib/application');
const app = express();
const PORT = 8080; 
app.set('json spaces', 2);

//middlewares
app.use(express.json());   //Documentos json
app.use(express.urlencoded({extended:false}));


// starting the server
const server = app.listen(PORT, () => {
    console.log(`server on http://localhost:${PORT}`)
});


//routes
/* app.use(require('./routes/index')); */
app.use('/api/product',require('./routes/product'));