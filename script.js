// JS for Odin Library

const library = []; 

function Book(title, author, length, status) {
    this.title = title;
    this.author = author;
    this.length = length;
    this.status = status;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, length, status) {
    const book = new Book (title, author, length, status);
    library.push(book);
}