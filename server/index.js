const express = require('express'); //Importar librerias de node

const app = express(); //la app

app.get('/', (req, res) => {
    res.json({
        message: 'Meower! 😹 🐈'
    });
});

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
});