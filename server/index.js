const express = require('express'); //Importar librerias de node
const cors = require('cors');

const app = express(); //la app

//Escuchar cualquier peticion y recoger el JSON
app.use(cors());
app.use(express.json());


/*
npm init -y  
npm start

-- AutoSave --
npm i express morgan    
npm i --save-dev nodemon
npm run dev

npm i cors 
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
    if(isValidMew(req, res)){
        //Si es valido lo añadimos a la BD
        console.log("Inserting into DB...");

        const mew = {
            name: req.body.name.toString(),
            content: req.body.content.toString()
          };
        
    }
    else{
        res.status(422);
        res.json({
            message: 'Hey! Name and Content are required!'
        })
    }
});

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
});