//1. Crear un objeto express
const express=require('express');

//2. Crear un objeto que represente nuestra aplicación
const app= express();

app.use(express.json()); // todos los entry points llaman a las  funciones .use, antes del callback

//Definir los entry point de la API
//Definir la ruta (la url) en dónde va a responder nuestra API
// http://localhost:3000/

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin","*"); // aceptar el acceso desde los siguientes orígenes:para apis públicas "*"
    res.header("Access-Control-Allow-Methods", "POST");// acepta peticiones de los métodos seleccionados, en este caso POST
    res.header("Access-Control-Allow-Headers", "Content-type"); // solo acepta peticiones de encabezados de tipo content-type
    next(); // Después de procesar, siga con la función que lo llamó
}
    
    )
app.post(
    '/api/sumar',
    //Se requieren dos objetos: uno representando la petición
    //un objeto representando la respuesta
    (req, res)=>{
        //To Do: Aquí va el procesamiento de la petición a esta ruta
        const {numero_1, numero_2}= req.body;
        const resultado=parseFloat(numero_1)+parseFloat(numero_2);    // con el parse float convierte cadena de texto que venga de front, en número    
        res.json(resultado);
    }
);

app.post(
    '/api/restar',
    (req, res)=>{
        const {numero_1, numero_2}= req.body;
        const resultado=numero_1-numero_2;        
        res.json(resultado);
    }
);

//¿Cómo queda la ruta para dividir?

app.post(
    '/api/dividir',
    (req,res)=>{
        let resultado;
        
        try{
            const {numero_1, numero_2}= req.body;           
            resultado=numero_1/numero_2;   

        }catch(error){
            //Gestionar el error
            resultado=error;
        }
        
        res.json(resultado);
    }
)

//3. Crear un servicio para escuchar peticiones
app.listen(
    3000,
    ()=>{
      console.log("Servidor ejecutándose en el puerto 3000");
    }
);