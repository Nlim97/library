let myLibrary = [];
const addBookForm = document.querySelector(".add-book").addEventListener("click", addNewBook)
const addBook = document.querySelector(".submit-form").addEventListener("click", submitForm)
const formDiv = document.querySelector(".form-container")
const booksDiv = document.querySelector(".book-cards")
const closeButton = document.querySelector(".close").addEventListener("click",closeForm)


function book(name, author, pages, imgURL){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.imgURL = imgURL;
    this.info = () => {
        console.log(`${this.name} by ${this.author}, ${this.pages} pages, ${this.read}`);
    };
};


function addNewBook(){
    formDiv.style.display = "flex";
}
function closeForm(){
    formDiv.style.display = "none"
}

function submitForm(event){
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author =  document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const image = document.querySelector("#url").value;
    if(title.length === 0 || author.length === 0 || pages < 1){
        alert("Please fill in the fields")
    }else{
        let myBook = new book(title, author, pages, image);
        myLibrary.push(myBook)
        formDiv.style.display = "none"
        displayBooks()
    }
}

function displayBooks(){
    myLibrary.forEach(item => {
        const newDiv = document.createElement("div")
        newDiv.classList.add("book-card")
        const innerDiv = document.createElement("div")
        innerDiv.classList.add("book-info")
        const title = document.createElement("h4")
        title.innerHTML = `Title: ${item.name}`
        innerDiv.appendChild(title)
        const author = document.createElement("h4")
        author.innerHTML = `Author: ${item.author}`
        innerDiv.appendChild(author)
        const pages = document.createElement("h4")
        pages.innerHTML = `Page: ${item.pages}`
        innerDiv.appendChild(pages)
        const image = document.createElement("img")
        image.setAttribute("src", item.imgURL)
        const readingDiv = document.createElement("div")
        readingDiv.classList.add("read-toggle-div")
        const read = document.createElement("h4")
        read.innerHTML = "Reading:"
        const readToggle = document.createElement("input")
        readToggle.setAttribute("type", "checkbox")
        readToggle.classList.add("read-toggle")
        readingDiv.appendChild(read)
        readingDiv.appendChild(readToggle)
        innerDiv.appendChild(readingDiv)
    

        newDiv.appendChild(image)
        newDiv.appendChild(innerDiv)
    

        booksDiv.appendChild(newDiv)
        console.log(newDiv)
    })
    myLibrary = []
}
