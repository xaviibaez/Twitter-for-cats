console.log('Hello World!');

const form = document.querySelector('form'); // grabbing an element on the page
const loadingElement = document.querySelector('.loading');

loadingElement.style.display = 'none';

form.addEventListener('submit', (event) => {
  event.preventDefault(); //Poner para hacer que trabajemos con JS
  const formData = new FormData(form);
  const name = formData.get('name');
  const content = formData.get('content');

  const mew = {
    name,
    content
  };

  console.log(mew)
  form.style.display = 'none';
  loadingElement.style.display = '';
});