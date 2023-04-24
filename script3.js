let myLibrary = [
];

// select the form to get the values
const form = document.getElementById('book-form');
const formCard = document.querySelector('.form_card');
const library = document.querySelector('.library');

// function to create book card
function createBook(array, i) {
  const divCard = document.createElement('div');
  divCard.classList.add('book');

  const btnRemove = document.createElement('button');
  btnRemove.classList.add('btn_remove');
  btnRemove.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
  btnRemove.setAttribute('onclick', 'deleteBook(this)');
  divCard.appendChild(btnRemove);

  const title = document.createElement('h2');
  title.classList.add('book_title');
  title.textContent = array[i].title;
  divCard.appendChild(title);

  const author = document.createElement('p');
  author.textContent = `Author: ${array[i].author}`;
  divCard.appendChild(author);

  const pages = document.createElement('p');
  pages.textContent = `Pages: ${array[i].pages}`;
  divCard.appendChild(pages);

  const btnRead = document.createElement('button');
  btnRead.classList.add('btn_read', 'red');
  btnRead.textContent = 'Not Read';
  btnRead.setAttribute('onclick', 'toggleRead(this)');
  divCard.appendChild(btnRead);

  library.appendChild(divCard);
}

// function to add book to library array

function addBookToLibrary(event) {
// cancel auto refresh
  event.preventDefault();
  // new obj using constructor
  const myFormData = new FormData(event.target);

  const formDataObj = {};
  myFormData.forEach((value, key) => { (formDataObj[key] = value); });
  myLibrary.push(formDataObj);

  createBook(myLibrary, myLibrary.length - 1);
  form.reset();
}

// add functionality to the add book button

form.addEventListener('submit', addBookToLibrary);

// select button to open and close form

const BTN_OPEN_FORM = document.querySelector('.add_book');
const BTN_CLOSE = document.querySelector('.btn_close');

// function to open or close form window

function toggleFormVisibility() {
  formCard.classList.toggle('hidden');
}

// add function to the button

BTN_OPEN_FORM.addEventListener('click', toggleFormVisibility);
BTN_CLOSE.addEventListener('click', toggleFormVisibility);

// function to delete a book - onclick

function deleteBook(el) {
  const nextP = el.nextSibling;
  myLibrary = myLibrary.filter((item) => item.title !== nextP.innerText);
  nextP.parentElement.remove();
}

function toggleRead(el) {
  const buttonRead = el;
  if (buttonRead.classList.contains('red')) {
    buttonRead.innerText = 'Read';
    buttonRead.classList.toggle('red');
    buttonRead.classList.toggle('green');
  } else {
    buttonRead.innerText = 'Not Read';
    buttonRead.classList.toggle('red');
    buttonRead.classList.toggle('green');
  }
}
