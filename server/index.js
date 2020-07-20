//Importar librerias de node
const express = require('express'); 
//Cors
const cors = require('cors');
//Conexion a MongoDB
const monk = require('monk');

//Objeto App
const app = express(); 

//Conectar a dominio/nombreBBDD
const db = monk('localhost/meower');
//Recuperar la colección 'mews', si no existe, la crea
const mews = db.get('mews');

//Escuchar cualquier peticion y recoger el JSON
app.use(cors());
app.use(express.json());


/*
-- EN LA CAPERTA DE SERVER --
npm init -y  
npm start

-- AutoSave --
npm i express morgan    
npm i --save-dev nodemon
npm run dev

-- CORS -> Seguridad --
npm i cors 

-- MONGO DB *LLORA^^* --
-- Tener mongoDB instalado en local *IMPORTANTE* --
npm i monk
mongo -> una vez instalado para gestionar mongo des de la consola
*/

//Cuando se intenta acceder a http://localhost:5000
app.get('/', (req, res) => {
    res.json({
        message: 'Meownjnner! 😹 🐈'
    });
});

//Asegurarnos que es contenido valido -> no es vacio, ni el titulo ni el contenido
function isValidMew(mew) {
    return mew.name && mew.name.toString().trim() !== '' &&
    mew.content && mew.content.toString().trim() !== '';
}

//Aqui entra cuando se hace un nuevo mew (nuevo mensaje)
app.post('/mews', (req, res) => {
    if(isValidMew(req.body)){
        //Si es valido lo añadimos a la BD
        console.log("Inserting into DB...");

        //Creamos el objeto con los datos del form
        const mew = {
            name: req.body.name.toString(),
            content: req.body.content.toString(),
            created: new Date()
          };

        console.log(mew);

        //Hacemos insert en la BBDD
        mews
        .insert(mew)
        .then(createdMew => {
            res.json(createdMew);
        });
    }
    else{
        //Si se pone contenido string vacio salta este error, no se muestra en pantalla
        res.status(422);
        res.json({
            message: 'Hey! Name and Content are required!'
        })
    }
});

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
});