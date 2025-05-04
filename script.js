// JS for Odin Library

const library = []; 

// Object constructor for creating new book
function Book(title, author, length, status) {
    this.title = title;
    this.author = author;
    this.length = length;
    this.status = status;
    this.id = crypto.randomUUID();
}

// Creates new book and adds it to library 
function addBookToLibrary(title, author, length, status) {
    const book = new Book (title, author, length, status);
    library.push(book);
}

// Loops through library and displays each book on page
function displayLibrary() {
    for (const book of library) {
        const bookList = document.querySelector("#book-list")
        
        const newBook = document.createElement("div");
        newBook.classList.add("book");
        newBook.dataset.bookId = book.id;

        const bookTitle = document.createElement("div");
        bookTitle.classList.add("book-title");
        bookTitle.textContent = book.title;
        newBook.appendChild(bookTitle);

        const bookBody = document.createElement("div");
        bookBody.classList.add("book-body");
        newBook.appendChild(bookBody);

        const bookContent = document.createElement("div");
        bookContent.classList.add("book-content");
        bookBody.appendChild(bookContent);

        const bookAuthor = document.createElement("div");
        bookAuthor.classList.add("book-content-item");
        bookAuthor.textContent = `By: ${book.author}`;
        bookContent.appendChild(bookAuthor);

        const bookLength = document.createElement("div");
        bookLength.classList.add("book-content-item");
        bookLength.textContent = `Pages: ${book.length}`;
        bookContent.appendChild(bookLength);

        const bookStatus = document.createElement("div");
        bookStatus.classList.add("book-content-item");
        bookStatus.textContent = `Status: ${book.status}`;
        bookContent.appendChild(bookStatus);

        const bookButtonRow = document.createElement("div");
        bookButtonRow.classList.add("book-button-row");
        bookBody.appendChild(bookButtonRow);

        const changeStatusButton = document.createElement("button");
        changeStatusButton.classList.add("book-button");
        changeStatusButton.textContent = "Change status";
        bookButtonRow.appendChild(changeStatusButton);

        const removeBookButton = document.createElement("button");
        removeBookButton.classList.add("book-button");
        removeBookButton.textContent = "Remove book";
        bookButtonRow.appendChild(removeBookButton);

        bookList.appendChild(newBook);
    }
}

const newBookButton = document.querySelector("#new-book-button");

newBookButton.addEventListener("mousedown", function() {
    newBookButton.style.backgroundColor = "#A65F48";
});

newBookButton.addEventListener("mouseup", function() {
    newBookButton.style.backgroundColor = "#C97B63";

    const titleContainer = document.querySelector("#title-container");
    titleContainer.classList.add("blur");

    const booksContainer = document.querySelector("#books-container");
    booksContainer.classList.add("blur");

    const footerContainer = document.querySelector("#footer-container");
    footerContainer.classList.add("blur");

    const dialog = document.querySelector("dialog");
    dialog.showModal();
});

addBookToLibrary("Master of the Senate", "Robert Caro", "1232", "Read");
addBookToLibrary("American Prometheus", "Kai Bird and Martin J. Sherwin", "721", "Read");
addBookToLibrary("Death's End", "Cixin Liu", "605", "Read");
addBookToLibrary("The Nvidia Way", "Tae Kim", "268", "Unread");
addBookToLibrary("The Warmth of Other Suns", "Isabel Wilkerson", "622", "Read");
addBookToLibrary("The Road", "Cormac McCarthy", "241", "Unread");

displayLibrary();