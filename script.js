const addBook = document.querySelector("#addBook");
const dialog = document.querySelector("dialog");
const submitBook = document.querySelector("#submitBook");
let bookId = 0;

const myLibrary = [];

function Book(name, author, pageCount, read) {
    this.id = bookId;
    this.name = name;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
    drawBook(book);
}

function removeBookFromLibrary(id) {
    console.log('dd')
    const index = myLibrary.indexOf((book) => {
        return book.id === id
    })
    myLibrary.splice(index, 1);
    document.getElementById("book" + id).remove()
}

function drawBook(book) {
    // myLibrary.forEach(function(book) {
    const node = '<li id="book' + book.id + '"><p>' + book.name +'</p><p>'+ book.author +'</p><p>' + book.pageCount + '</p><p><label class="switch"><input type="checkbox"><span class="slider round"></span></label></p><div><img class="destructive button" onclick="removeBookFromLibrary(' + book.id + ')" src="./svg/trash-can-outline.svg"></div></li>'
    document.querySelector("ol").insertAdjacentHTML("beforeend", node)
    // });
}

// drawBook();

addBook.addEventListener("click", () => {
    // const book = new Book("The Doctor", "R Tolkin", 536, false);
    // addBookToLibrary(book);
    dialog.showModal();
});

submitBook.addEventListener("click", () => {
    const title = document.querySelector("#bookTitle").value;
    const author = document.querySelector("#bookAuthor").value;
    const pageCount = document.querySelector("#bookPageCount").value;

    console.log(title + ' ' + author + ' ' + pageCount);
    const book = new Book(title, author, pageCount, true);
    addBookToLibrary(book);
});

