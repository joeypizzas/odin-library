# Planning for library project 
## Does your program have a user interface? What will it look like? What functionality will the interface have? 
- The program has a user interface. 
- The program has a top section, that includes:
    - Program title. 
    - Sub-header with description of the program. This also includes a button to add a new book. 
    - Clicking the new book button opens a modal that takes the book parameters as inputs and offers the ability to submit to create the book. This includes:
        - Title. 
        - Author. 
        - Page length. 
        - Whether you've read it. 
- The program has a main section. It includes the current list of books in the libary. These are rendered as a grid of cards. Each card contains:
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