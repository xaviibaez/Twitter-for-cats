const express = require('express'); //Importar librerias de node
const cors = require('cors');

const app = express(); //la app

//Escuchar cualquier peticion y recoger el JSON
app.use(cors());
app.use(express.json());

//Cuando se intenta acceder a http://localhost:5000
app.get('/', (req, res) => {
    res.json({
        message: 'Meownjnner! 😹 🐈'
    });
});

//Asegurarnos que es contenido valido -> no es vacio, ni el titulo ni el contenido
function isValidMew(mew) {
    return mew.name && mew.name.toString().trim() !== '' && mew.name.toString().trim().length <= 50 &&
    mew.content && mew.content.toString().trim() !== '' && mew.content.toString().trim().length <= 140;
}

//Aqui entra cuando se hace un nuevo mew (nuevo mensaje)
app.post('/mews', (req, res) => {
    if(isValidMew(req, res)){
        //Si es valido lo añadimos a la BD
        console.log("Inserting into DB...");
        
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