let myLibrary = [];


const form = document.getElementById('contact-form');

form.addEventListener('submit', addBookToLibrary);

function addBookToLibrary(event) {
  // do stuff here
  event.preventDefault();
  const myFormData = new FormData(event.target);
  
  const formDataObj = {};
  myFormData.forEach((value, key) => (formDataObj[key] = value));
  console.log(formDataObj);
}
