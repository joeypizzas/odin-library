// JS for Odin Library

const library = []; 

function Book(title, author, length, status) {
    this.title = title;
    this.author = author;
    this.length = length;
    this.status = status;
    this.id = crypto.randomUUID();
}