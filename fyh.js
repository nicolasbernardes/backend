let fs = require("fs")
let os = require("os")


const archivo = 'prueba.txt'





const contenido = [ {                                                                                                                                                    
    title: 'Play station 5',                                                                                                                          
    price: 1500,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-https://www.google.com/search?q=playstation+5&rlz=1C1SQJL_pt-BRUY956UY956&sxsrf=AOaemvJjWGgscu8Ap_gG5eY19GFQhZLTCQ:1642290993826&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiq0bfa-rT1AhXXqpUCHR6JD34Q_AUoAXoECAEQAw#imgrc=OhaJUNI67cGNvM-planet-school-256.png',                                   
    id: 1                                                                                                                                              
  }                                                                                                                                                
]  

fs.writeSync(archivo, contenido, (err) =>{
    if(err) throw('hubo un error')

    console.log('se ha escrito')
})




const OtroContenido = [                                                                                                                                                     
    {                                                                                                                                                    
      title: 'Xbox',                                                                                                                                 
      price: 1000,                                                                                                                                     
      thumbnail: 'https://cdn3.ichttps://www.google.com/search?q=xbox+series&tbm=isch&ved=2ahUKEwj1y8j2-rT1AhW9MrkGHabACXEQ2-cCegQIABAA&oq=xbox+series&gs_lcp=CgNpbWcQAzIECAAQQzIFCAAQgAQyBQgAEIAEMgQIABBDMgQIABBDMgUIABCABDIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDoHCCMQ7wMQJ1CrBFjxFWCkG2gAcAB4AIABZogBiQWSAQM3LjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=bF_jYfXlMb3l5OUPpoGniAc&rlz=1C1SQJL_pt-BRUY956UY956onfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                     
      id: 2                                                                                                                                              
    },                                                                                                                                                   
    {                                                                                                                                                    
      title: 'Nintendo',                                                                                                                              
      price: 500,                                                                                                                                     
      thumbnail: 'https://https://www.google.com/search?q=nintendo+switch&rlz=1C1SQJL_pt-BRUY956UY956&sxsrf=AOaemvKID7eCfCtf1Qx8Zo5Vfo6SmgvuAw:1642291106581&source=lnms&tbm=isch&sa=X&sqi=2&ved=2ahUKEwjo05mQ-7T1AhXVd94KHeAFA4oQ_AUoAXoECAMQAw&biw=1600&bih=827&dpr=1cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                          
      id: 3                                                                                                                                              
    }                                                                                                                                              
  ]         


fs.appendFile(archivo, OtroContenido, (err) => {
    if(err) throw('hubo un error')

    console.log('se ha escrito')
})



































/* const delay = ret => {
    for (let i = 0; i < ret*3e6; i++) {}
}


class ManejadorArchivos{
    constructor(){
        this.archivo = url_archivo;

    }

    create(){
        try{
            let insertData = new Date ();
            return fs.writeFileSync(`${this.archivo}`, `${insertData}`,`utf-8`)
            
            
        } catch(error){

        }
    }
}

let controlador = new ManejadorArchivos("./fyh.txt");
let res = controlador.create();
console.log(res) */