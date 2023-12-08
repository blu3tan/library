const catalog = document.getElementById('display');
const addBtn = document.querySelector('.add-book-btn');
const modal = document.querySelector('.modal');
const btnRead = document.querySelector('read');
const btnDelete = document.getElementById('delete');

const library = [
    {
        'title' : 'Don Quixote',
        'author': 'Miguel de Cervantes',
        'year' : 1605,
        'read'  : 'false'
    }, 
    {
        'title' : 'Moby Dick',
        'author': 'Herman Melville',
        'year' : 1851,
        'read'  : 'false'
    }, 
    {
        'title' : '1984',
        'author': 'George Orwell',
        'year' : 1949,
        'read'  : 'false'
    }, 
    {
        'title' : 'To Kill a Mockingbird',
        'author': 'Harper Lee',
        'year' : 1960,
        'read'  : 'false'
    }
];

function book(title, author, year, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
}

addBtn.addEventListener('click', () => {
    modal.showModal();
});


function displayBooks() {
    library.forEach(item => {
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
        cover.style.backgroundColor = randomHsl();
        author.innerText = `By: ${item.author}`;
        year.innerText = `Year: ${item.year}`;

        read.addEventListener('click', (e) => {
            if (readIcon.innerText == 'book_2') {
                e.target.classList.add('toggleOn');
                readIcon.innerText = 'book_5';
                item.read = 'true';
            }
            else {
                readIcon.innerText = 'book_2';
                e.target.classList.remove('toggleOn');
                item.read = 'false';
            }
        });

        trash.addEventListener('click', (e) => {
            book.classList.add('book-remove');
            setTimeout (() => {book.remove();}, 600);
            const index = book.dataset;
            library.splice((index.index), 1);
            // console.log(index.index);
        });

        function randomHsl() {
            return 'hsl(' + (Math.random() * 360) + ', 50%, 42%)';
        }
        
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
    });
};

displayBooks();