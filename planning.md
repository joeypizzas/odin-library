# Planning for library project 

## Does your program have a user interface? What will it look like? What functionality will the interface have? 
- The program has a user interface. 
- The program has a top section, that includes:
    - Program title. 
    - Sub-header with description of the program.
    - Clicking the new book button opens a modal that takes the book parameters as inputs and offers the ability to submit to create the book. This includes:
        - Title. 
        - Author. 
        - Page length. 
        - Whether you've read it. 
- The program has a main section. 
    - It has a description of the section and a button to add a new book. 
    - It includes the current list of books in the libary. These are rendered as a grid of cards. Each card contains:
        - Title. 
        - Author. 
        - Page length. 
        - Whether you'vd read it. 
        - The option to change read status. 
        - A button to remove from the library. 
- The program has a footer. It includes a reference to the program author. 

## What inputs will your program have? Will the user enter data or will you get input from somewhere else?
- The program's inputs are the books, including the relevant data for each one. 
- I'll seed the program with a set of initial books. This will help get a feel for the program's value when they first view it, which would be more difficult with an empty library. 
- Beyond the library's default books, each new book will come from the "add book" button and its corresponding form. 

## What’s the desired output?
- The UI described above. 
- Ability to create new books and dynamically display them in the UI. 
- Dynamically adjust read status of existing books. 
- Dynamically remove existing books from the UI. 

## Given your inputs, what are the steps necessary to return the desired output?
1. Create the basic structure of the page. 
    - Three divs, one for each section. Decide on page color scheme for clean, modern UI. 
    - Flexbox with flex direction, column feels most simple for this. 
    - Make sure height and width are responsive to the page size. 
2. Add header section. It uses flexbox with flex-direction column. 
    - Header top is the title. Centered and with a clean, modern look. 
    - Sub-header contains a description of the app. 
3. Add body. It uses flex box with flex direction column. 
    - Section title. 
    - Section description with button to add new book. Clicking button to add new book:
        - Opens a dialog with a form inside it to add the book details. Form fields are:
            - Title (focused by default). 
            - Author. 
            - Page Length. 
            - Read status. 
        - Form has submit button.
            - Need to use event.preventDefault(); to prevent data from being sent to the server.  
        - Form has button to close it. 
        - Clicking outside the form also closes it. 
        - Form uses flexbox and flex direction column to enable easy styling. 
    - Books list. Uses grid of cards. Each card is a book. Grid is dynamically sizes with auto-fit to ensure it scales well with adjustments to page size. 
    - Add a couple of default books directly into the HTML (temporarily) to nail down the correct styling. These will be removed eventually, when the default books are stored in the array and added to the page via the DOM on page load. 
    - Each card contains (in this order):
        - Title. 
        - Author. 
        - Page length. 
        - Read status (with button to change). 
        - Option to remove book. 
4. Add footer with attribution to program author. 
5. Initialize array for library of books. 
6. Add book constructor. 
    - It takes the following paramters to create a new book object:
        - Title. 
        - Author. 
        - Page Length. 
        - Read status. 
    - It also gets an ID generated with crypto.randomUUID(). 
7. Add function that adds book to library. 
    - Takes parameters:
        - Title. 
        - Author. 
        - Page Length. 
        - Read status.
    - Calls book constructor with paramters. 
    - Adds book to library array. 
8. Add function that displays every book from the library on the page. It:
    - Is a for...of loop that goes through the array. 
    - For each book, it creates the necessary HTML structure for the book card and inserts it into the appropriate section via the DOM with the correct styling. 
9. Create the logic for the new book button. 
    - Add event listener on the button. 
    - Clicking sets the dialog with the form status so it appears in the page.
    - Clicking it adds blur to rest of page. 
10. Handle the submission of the new book form. 
    - Submitting the form doesn't send data to the server. 
    - Event listener on the submit button. 
    - Clicking it: 
        - Calls function to add book to library with data from form as parameters. 
        - Calls function to display library list on page (which now includes new book). 
11. Handle logic from remove book button. 
    - New remove book function that takes book ID as parameter. It:
        - Removes the card from the DOM based on ID. 
        - Locates the object in the array based on ID and removes it. 
    - Event listener on remove book button. 
    - Clicking button calls remove book function with book ID from click as parameter. 
    - Calls function to display library list on page (which now omits removed book).
12. Add button to change book's read status. 
    - Add Book prototype function that adjust's read status. Function has no parameters. 
        - If current status is unread, it changes to read. Else, it changes to unread. 
    - Add event listener on button. 
    - When button is clicked, locate the relevant book in the array by ID and call function to change its status. 
    - Calls function to display library list on page (which now includes updated read status of book). 