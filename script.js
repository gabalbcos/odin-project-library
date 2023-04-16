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
const library = document.querySelector('.library');

// function to create book card
function createBook() {
  const div_card = document.createElement('div');
  div_card.classList.add('book');

  const btn_remove = document.createElement('button');
  btn_remove.classList.add('btn_remove');
  btn_remove.textContent = 'x';
  div_card.appendChild(btn_remove);


  const title = document.createElement('h2');
  title.classList.add('book_title');
  title.textContent = 'Hello World!'  
  div_card.appendChild(title);

  const author = document.createElement('p');
  author.textContent = 'Hello World2!';
  div_card.appendChild(author);

  const pages = document.createElement('p');
  pages.textContent = 'Hello World!3';
  div_card.appendChild(pages);

  const btn_read = document.createElement('button');
  btn_read.classList.add('btn_read');
  btn_read.textContent = 'Hello World!4';
  div_card.appendChild(btn_read);

  library.appendChild(div_card);
}

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

// test

