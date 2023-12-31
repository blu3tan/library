const catalog = document.getElementById('display');
const addBtn = document.querySelector('.add-book-btn');
const modal = document.querySelector('.modal');
const btnRead = document.querySelector('read');
const btnReadModal = document.getElementById('modal-read-value');
const btnAddBookModal = document.getElementById('modal-add-book');
const btnDelete = document.getElementById('delete');
const btnModalDelete = document.getElementById('modal-submit');
const form = document.getElementById('modal-form');
const infoButton = document.getElementById('logo-button');
const infoModal = document.getElementById('info-modal');
const infoCloseButton = document.getElementById('info-close-button');

let readValue = false; 

const library = [
    {
        'title' : 'Don Quixote',
        'author': 'Miguel de Cervantes',
        'year' : 1605,
        'read'  : true,
        'color' : '#357FA1'
    }, 
    {
        'title' : 'Moby Dick',
        'author': 'Herman Melville',
        'year' : 1851,
        'read'  : true,
        'color' : '#A13584'
    }, 
    {
        'title' : '1984',
        'author': 'George Orwell',
        'year' : 1949,
        'read'  : false,
        'color' : '#3594A1'
    }, 
    {
        'title' : 'To Kill a Mockingbird',
        'author': 'Harper Lee',
        'year' : 1960,
        'read'  : false,
        'color' : '#78A136'
    }
];

class Book {
    constructor (title, author, year, read, color) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.read = read;
        this.color = color;
    }
}

// Book oject using constructor function method

// function book (title, author, year, read, color) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.read = read;
//     this.color = color;
// }

btnReadModal.addEventListener('click', (e) => {
    readButtonBehavior(e)
});

btnModalDelete.addEventListener('click', (e) => {
    modal.setAttribute('closing', '');
    setTimeout (() => {
        modal.close();
        modal.removeAttribute('closing');
        document.getElementById('modal-form').reset();
        readModalButtonReset();
    }, 550);
});

addBtn.addEventListener('click', () => {
    modal.showModal();
});

infoButton.addEventListener('click', () => {
    infoModal.showModal();
});

infoCloseButton.addEventListener('click', () => {
    infoModal.setAttribute('closing', '');
    setTimeout (() => {
        infoModal.close();
        infoModal.removeAttribute('closing');
    }, 550);
});

form.addEventListener('submit', () =>{
    modal.setAttribute('closing', '');
    setTimeout (() => {
        form.submit();
        addBook();
        modal.close();
        document.getElementById('modal-form').reset();
        readModalButtonReset();
        modal.removeAttribute('closing');
    }, 550);
    event.preventDefault();
});

function displayNewBook (item){
    const book = document.createElement('div');
    const cover = document.createElement('div');
    const author = document.createElement('div');
    const year = document.createElement('div');
    const status = document.createElement('div');
    const read = document.createElement('div');
    const readIcon = document.createElement('span');
    const trash = document.createElement('div');
    const trashIcon = document.createElement('span');
    const coverText = document.createElement('h2');

    book.setAttribute('data-index', library.indexOf(item));
    book.classList.add('book-card');
    cover.classList.add('cover');
    author.classList.add('author');
    year.classList.add('year');
    status.classList.add('status');
    read.classList.add('read');
    readIcon.classList.add('material-symbols-outlined');
    trash.classList.add('delete');
    trashIcon.classList.add('material-symbols-outlined');
    readIcon.innerText = 'book_2';
    trashIcon.innerText = 'delete';
    coverText.innerText = item.title;
    cover.style.backgroundColor = item.color;
    author.innerText = `By: ${item.author}`;
    year.innerText = `Year: ${item.year}`;


    read.addEventListener('click', (e) => {
        if (readIcon.innerText == 'book_2') {
            e.target.classList.add('toggleOn');
            readIcon.innerText = 'book_5';
            item.read = true;
        }
        else {
            readIcon.innerText = 'book_2';
            e.target.classList.remove('toggleOn');
            item.read = false;
        }
    });

    trash.addEventListener('click', (e) => {
        book.classList.add('book-remove');
        setTimeout (() => {
            book.remove();
            const index = book.dataset;
            library.splice((index.index), 1);
            clearLibrary(catalog);
            displayBooks();
        }, 600);

    });
    
    cover.appendChild(coverText);
    book.appendChild(cover);
    book.appendChild(author);
    book.appendChild(year);
    book.appendChild(status);
    read.appendChild(readIcon);
    trash.appendChild(trashIcon);
    status.appendChild(read);
    status.appendChild(trash);
    catalog.appendChild(book);

    if (item.read === true) {
        read.classList.add('toggleOn');
        readIcon.innerText = 'book_5';
    }
    else {
        read.classList.remove('toggleOn');
        readIcon.innerText = 'book_2';
    };

};

function displayBooks() {
    library.forEach(item => {
        displayNewBook(item);
    });
};

function readButtonBehavior(e) {
    const readIconModal = document.querySelector('.modal-read');
    if (readIconModal.innerText == 'book_2') {
        e.target.classList.add('toggleOn');
        readIconModal.innerText = 'book_5';
        readValue = true;
    }
    else {
        readIconModal.innerText = 'book_2';
        e.target.classList.remove('toggleOn');
        readValue = false;
    }
};

function readModalButtonReset() {
    const readIconModal = document.querySelector('.modal-read');

    btnReadModal.classList.remove('toggleOn');
    readIconModal.innerText = 'book_2';
    readValue = false;
};

function addBook() {
    const titleValue = document.getElementById('title').value;
    const authorValue = document.getElementById('author').value;
    const yearValue = document.getElementById('year').value;
    const colorValue = randomHsl();
    
    let newBook = new Book(titleValue, authorValue, yearValue, readValue, colorValue);
    library.push(newBook);
    displayNewBook(newBook);
    newBook = {};
};

function randomHsl() {
    return 'hsl(' + (Math.floor(Math.random() * 360)) + ', 50%, 42%)';
};

function clearLibrary(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
};


displayBooks();