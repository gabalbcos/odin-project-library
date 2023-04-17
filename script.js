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
const form = document.getElementById('book-form');
const form_card = document.querySelector('.form_card');
const library = document.querySelector('.library');

// function to create book card
function createBook(array, i) {
  const div_card = document.createElement('div');
  div_card.classList.add('book');

  const btn_remove = document.createElement('button');
  btn_remove.classList.add('btn_remove');
  btn_remove.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
  btn_remove.setAttribute('onclick', 'deleteBook(this)');
  div_card.appendChild(btn_remove);

  const title = document.createElement('h2');
  title.classList.add('book_title');
  title.textContent = array[i].title;  
  div_card.appendChild(title);

  const author = document.createElement('p');
  author.textContent = `Author: ${array[i].author}`;
  div_card.appendChild(author);

  const pages = document.createElement('p');
  pages.textContent = `Pages: ${array[i].pages}`;
  div_card.appendChild(pages);

  const btn_read = document.createElement('button');
  btn_read.classList.add('btn_read', 'red');
  btn_read.textContent = 'Not Read';
  btn_read.setAttribute('onclick', 'toggleRead(this)');
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

  createBook(myLibrary, myLibrary.length - 1);
  form.reset();
}



// button to open form
const FORM = document.querySelector('.new_book_form');
const BTN_OPEN_FORM = document.querySelector('.add_book');
const BTN_CLOSE = document.querySelector('.btn_close');

function toggleFormVisibility() {
  form_card.classList.toggle('hidden');
}

BTN_OPEN_FORM.addEventListener('click', toggleFormVisibility)
BTN_CLOSE.addEventListener('click', toggleFormVisibility)
// test


function deleteBook(el) {
  const nextP = el.nextSibling;
  myLibrary = myLibrary.filter(item => item.title !== nextP.innerText);
  nextP.parentElement.remove();
}

function toggleRead(el) {
  const buttonRead = el;
  if (buttonRead.classList.contains("red")){
  buttonRead.innerText = 'Read';
  buttonRead.classList.toggle('red');
  buttonRead.classList.toggle('green');
  } else {
  buttonRead.innerText = 'Not Read';
  buttonRead.classList.toggle('red');
  buttonRead.classList.toggle('green');
  }
}