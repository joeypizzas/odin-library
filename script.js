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
        changeStatusButton.classList.add("change-status-button");
        changeStatusButton.textContent = "Change status";
        changeStatusButton.addEventListener("mouseover", () => {
            changeStatusButton.style.backgroundColor = "#D89078";
        });
        changeStatusButton.addEventListener("mouseout", () => {
            changeStatusButton.style.backgroundColor = "#C97B63";
        });
        changeStatusButton.addEventListener("mousedown", function() {
            changeStatusButton.style.backgroundColor = "#A65F48";
        });
        changeStatusButton.addEventListener("mouseup", function() {
            changeStatusButton.style.backgroundColor = "#C97B63";
            if (book.status === "Read") {
                book.status = "Unread";
            } else {
                book.status = "Read";
            }
            bookStatus.textContent = `Status: ${book.status}`;
        });
        bookButtonRow.appendChild(changeStatusButton);

        const removeBookButton = document.createElement("button");
        removeBookButton.classList.add("book-button");
        removeBookButton.classList.add("remove-book-button");
        removeBookButton.textContent = "Remove book";
        removeBookButton.addEventListener("mouseover", () => {
            removeBookButton.style.backgroundColor = "#D89078";
        });
        removeBookButton.addEventListener("mouseout", () => {
            removeBookButton.style.backgroundColor = "#C97B63";
        });
        removeBookButton.addEventListener("mousedown", function() {
            removeBookButton.style.backgroundColor = "#A65F48";
        });
        removeBookButton.addEventListener("mouseup", function(event) {
            removeBookButton.style.backgroundColor = "#C97B63";
            const bookIDToRemove = event.target.closest("[data-book-id]").dataset.bookId;
            removeBookFromLibrary(bookIDToRemove);
            newBook.remove();
        });
        bookButtonRow.appendChild(removeBookButton);

        bookList.appendChild(newBook);
    }
}

function removeBookFromLibrary(id) {
    const bookToRemove = library.findIndex(book => book.id === id);
    library.splice(bookToRemove, 1);
}

const newBookButton = document.querySelector(".new-book-button");
const titleContainer = document.querySelector("#title-container");
const booksContainer = document.querySelector("#books-container");
const footerContainer = document.querySelector("#footer-container");
const dialog = document.querySelector("dialog");
const dialogBackground = document.querySelectorAll(".dialog-background");

newBookButton.addEventListener("mouseover", () => {
    newBookButton.style.backgroundColor = "#D89078";
});

newBookButton.addEventListener("mouseout", () => {
    newBookButton.style.backgroundColor = "#C97B63";
});

newBookButton.addEventListener("mousedown", function() {
    newBookButton.style.backgroundColor = "#A65F48";
});

// Opens and focuses new book dialog
newBookButton.addEventListener("mouseup", function() {
    newBookButton.style.backgroundColor = "#C97B63";
    titleContainer.classList.add("blur");
    booksContainer.classList.add("blur");
    footerContainer.classList.add("blur");
    dialog.show();
});

// Closes new book dialog with background click
dialogBackground.forEach(container => {
    container.addEventListener("mouseup", () => {
        dialog.close();
        titleContainer.classList.remove("blur");
        booksContainer.classList.remove("blur");
        footerContainer.classList.remove("blur");
    });
});

addBookToLibrary("Master of the Senate", "Robert Caro", "1232", "Read");
addBookToLibrary("American Prometheus", "Kai Bird and Martin J. Sherwin", "721", "Read");
addBookToLibrary("Death's End", "Cixin Liu", "605", "Read");
addBookToLibrary("The Nvidia Way", "Tae Kim", "268", "Unread");
addBookToLibrary("The Warmth of Other Suns", "Isabel Wilkerson", "622", "Read");
addBookToLibrary("The Road", "Cormac McCarthy", "241", "Unread");

displayLibrary();