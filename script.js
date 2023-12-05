const catalog = document.getElementById('display');

const library = [
    {
        'title' : 'The demolished man',
        'author': 'Alfred Bester',
        'pages' : 300,
        'read'  : 'false'
    }
];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function displayBooks() {
    library.forEach(item => {
        const book = document.createElement('div');
        const cover = document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const status = document.createElement('div');
        const read = document.createElement('div');
        const readIcon = document.createElement('span');
        const trash = document.createElement('div');
        const trashIcon = document.createElement('span');
        const coverText = document.createElement('h2');

        book.classList.add('book-card');
        cover.classList.add('cover');
        author.classList.add('author');
        pages.classList.add('pages');
        status.classList.add('status');
        read.classList.add('read');
        readIcon.classList.add('material-symbols-outlined');
        trash.classList.add('delete');
        trashIcon.classList.add('material-symbols-outlined');
        readIcon.innerText = 'visibility';
        trashIcon.innerText = 'delete';
        coverText.innerText = item.title;
        author.innerText = item.author;
        pages.innerText = item.pages;
        
        cover.appendChild(coverText);
        book.appendChild(cover);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(status);
        read.appendChild(readIcon);
        trash.appendChild(trashIcon);
        status.appendChild(read);
        status.appendChild(trash);
        catalog.appendChild(book);
    });
};

displayBooks();