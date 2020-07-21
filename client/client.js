console.log('Hello World!');

const form = document.querySelector('form'); // grabbing an element on the page
const loadingElement = document.querySelector('.loading');
const API_URL = 'http://localhost:5000/mews'; //where is the server that im making the request

loadingElement.style.display = 'none';

form.addEventListener('submit', (event) => {
  event.preventDefault(); //Poner para hacer que trabajemos con JS
  //Recoger los datos del form de html
  const formData = new FormData(form);
  const name = formData.get('name');
  const content = formData.get('content');

  const mew = {
    name,
    content
  };

  //Ocultar form y mostrar el loading element -> el gif
  form.style.display = 'none';
  loadingElement.style.display = '';

  //Enviar a backend API en forma de JSON
  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(mew),
    headers: {
      'content-type': 'application/json'
    }//.then -> Enviar de vuelta des de el server al cliente el contenido creado
  }).then(response => response.json())
    .then(createdMew => {
      console.log(createdMew);
      //Mostrar form y ocultar el loading element -> el gif y resetear el form
      form.reset();
      form.style.display = '';
      loadingElement.style.display = 'none';
    });
});