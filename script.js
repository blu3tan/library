const catalog = document.getElementById('display');
const btnAdd = document.getElementById('book-add');
const btnRead = document.querySelector('read');
const btnDelete = document.getElementById('delete');

const library = [
    {
        'title' : 'A Tale of Two Cities',
        'author': 'Charles Dickens',
        'year' : 1859,
        'read'  : 'false'
    }, 
    {
        'title' : 'To Kill a Mockingbird',
        'author': 'Harper Lee',
        'year' : 1960,
        'read'  : 'false'
    }, 
    {
        'title' : 'The Name of the Rose',
        'author': 'Umberto Eco',
        'year' : 1980,
        'read'  : 'false'
    }
];

function book(title, author, year, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
}

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
        readIcon.innerText = 'visibility_off';
        trashIcon.innerText = 'delete';
        coverText.innerText = item.title;
        cover.style.backgroundColor = randomHsl();
        author.innerText = `By: ${item.author}`;
        year.innerText = `Year: ${item.year}`;

        read.addEventListener('click', (e) => {
            if (readIcon.innerText == 'visibility_off') {
                e.target.classList.add('toggleOn');
                readIcon.innerText = 'visibility';
                item.read = 'true';
            }
            else {
                readIcon.innerText = 'visibility_off';
                e.target.classList.remove('toggleOn');
                item.read = 'false';
            }
        });

        trash.addEventListener('click', (e) => {
            book.remove();
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