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

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

const library = document.querySelector("#library");

function displayBooks()
{
    for (let i=0; i<myLibrary.length;i++)
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


        const bookPages = document.createElement("h3");
        bookPages.classList.add("bookPages");
        bookPages.textContent = myLibrary[i].pages;
        card.appendChild(bookPages);

        const hasReadBook = document.createElement("h4");
        hasReadBook.classList.add("hasReadBook");
        hasReadBook.textContent = myLibrary[i].read;
        card.appendChild(hasReadBook);

        library.appendChild(card);
    }
}

const firstBook = new Book("Jane Eyre","Charlotte Bronte","189 pages","Yes")
const secondBook = new Book("Emma","Jane Austen","215 pages","Yes")


myLibrary.push(firstBook)
myLibrary.push(secondBook);


/*addBookToLibrary();*/
displayBooks();