let myLibrary = [
  {
      "title": "asdasd",
      "author": "asdas",
      "pages": "123"
  },
  {
      "title": "lkjh",
      "author": "kjh",
      "pages": "765"
  }
];

// select the form to get the values
const form = document.getElementById('contact-form');

// dictate what happens after the submit button is pushed
// tells where the info will go

form.addEventListener('submit', addBookToLibrary);

function addBookToLibrary(event) {
  // cancel auto refresh
  event.preventDefault();

  // new obj using constructor
  const myFormData = new FormData(event.target);
  
  const formDataObj = {};
  myFormData.forEach((value, key) => (formDataObj[key] = value));
  myLibrary.push(formDataObj);
}

// button to open form
const FORM = document.querySelector('.new_book_form');
const BTN_OPEN_FORM = document.querySelector('.add_book');

function toggleFormVisibility() {
  FORM.classList.toggle('hidden');
}

BTN_OPEN_FORM.addEventListener('click', toggleFormVisibility)

