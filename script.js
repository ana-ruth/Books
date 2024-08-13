const myLibrary = [];


function Book(title,author,pages,read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function()
    {
        return ""+title+" by "+author+", "+pages+", "+read;
    };
}


function createBook(inputBook){
    const values = inputBook.split(",");
    const title = values[0];
    const author = values[1];
    const pages = values[2];
    const read = values[3]

    const newBook = new Book(title,author,pages,read)
    addBookToLibrary(newBook);
}


function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

const library = document.querySelector("#library");
let deleteBook;

function displayBooks(initialPosition,length)
{
    for (let i=initialPosition; i<length;i++)
    {

        const card = document.createElement("div");
        card.classList.add("card");
     
        const libraryCard = document.createElement("h1");
        libraryCard.textContent = "LIBRARY CARD";
        libraryCard.classList.add("libraryCard");
        card.appendChild(libraryCard);

        const bookTitle = document.createElement("h2");
        bookTitle.classList.add("bookTitle");
        bookTitle.textContent = "Title: " + myLibrary[i].title;
        card.appendChild(bookTitle);

        const bookAuthor = document.createElement("h2");
        bookAuthor.classList.add("bookAuthor");
        bookAuthor.textContent = "Author: " + myLibrary[i].author;
        card.appendChild(bookAuthor);


        const headings = document.createElement("div");
        headings.classList.add("headings");

        const pagesHeading = document.createElement("h3");
        pagesHeading.textContent = "Pages";
        headings.appendChild(pagesHeading);  
        
        const line = document.createElement("div");
        headings.appendChild(line);    

        const readHeading = document.createElement("h3");
        readHeading.textContent = "Read?";
        headings.appendChild(readHeading); 

        card.appendChild(headings);


        const pgsRead = document.createElement("div");
        pgsRead.classList.add("pgsRead");

        const bookPages = document.createElement("h3");
        bookPages.classList.add("bookPages");
        bookPages.textContent = myLibrary[i].pages;
        pgsRead.appendChild(bookPages);

        const hasReadBook = document.createElement("h3");
        hasReadBook.classList.add("hasReadBook");
        hasReadBook.textContent = myLibrary[i].read;
        pgsRead.appendChild(hasReadBook);

        card.appendChild(pgsRead);

        deleteBook = document.createElement("button");
        deleteBook.textContent = "REMOVE";
        card.appendChild(deleteBook);

        library.appendChild(card);
    }
}

const firstBook = new Book("Jane Eyre","Charlotte Bronte","189","Yes")
const secondBook = new Book("Emma","Jane Austen","215","Yes")


myLibrary.push(firstBook)
myLibrary.push(secondBook);


displayBooks(0,myLibrary.length); //initial display of books


/*Get new Book's details from the form */
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const confirmBtn = favDialog.querySelector("#confirmBtn");

const userTitle = document.querySelector("#Book")
const userAuthor = document.querySelector("#Author")
const userPages = document.querySelector("#Pages")
const userRead = document.querySelector("#Read")

let newBook;

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
favDialog.addEventListener("close", (e) => {
  newBook = favDialog.returnValue;
  createBook(newBook);
  displayBooks(myLibrary.length-1,myLibrary.length); //display the new book only
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); //prevent from submitting form
  favDialog.close(userTitle.value+","+userAuthor.value+","+userPages.value+","+userRead.value);
});

/*
deleteBook.addEventListener('click',function(){
    delete myArray[]; 
});
*/
