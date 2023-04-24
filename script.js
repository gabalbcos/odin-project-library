class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false; // You can add additional properties to the Book class as needed
  }
}

const myLibrary = [];

// select the form to get the values
const form = document.getElementById('book-form');
const formCard = document.querySelector('.form_card');
const library = document.querySelector('.library');

// function to create book card
function createBook(book) {
  const divCard = document.createElement('div');
  divCard.classList.add('book');

  const btnRemove = document.createElement('button');
  btnRemove.classList.add('btn_remove');
  btnRemove.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
  btnRemove.addEventListener('click', () => deleteBook(book));
  divCard.appendChild(btnRemove);

  const title = document.createElement('h2');
  title.classList.add('book_title');
  title.textContent = book.title;
  divCard.appendChild(title);

  const author = document.createElement('p');
  author.textContent = `Author: ${book.author}`;
  divCard.appendChild(author);

  const pages = document.createElement('p');
  pages.textContent = `Pages: ${book.pages}`;
  divCard.appendChild(pages);

  const btnRead = document.createElement('button');
  btnRead.classList.add('btn_read', 'red');
  btnRead.textContent = book.read ? 'Read' : 'Not Read';
  btnRead.addEventListener('click', () => toggleRead(book));
  divCard.appendChild(btnRead);

  library.appendChild(divCard);
}

// function to add book to library array
function addBookToLibrary(event) {
  event.preventDefault();
  const myFormData = new FormData(event.target);

  const formDataObj = {};
  myFormData.forEach((value, key) => {
    formDataObj[key] = value;
  });

  const newBook = new Book(formDataObj.title, formDataObj.author, formDataObj.pages);
  myLibrary.push(newBook);

  createBook(newBook);
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
function deleteBook(book) {
  myLibrary.splice(myLibrary.indexOf(book), 1);
  library.innerHTML = '';
  myLibrary.forEach(book => createBook(book));
}

function toggleRead(book) {
  book.read = !book.read;
  library.innerHTML = '';
  myLibrary.forEach(book => createBook(book));
}
