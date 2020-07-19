const express = require('express'); //Importar librerias de node

const app = express(); //la app

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
  });