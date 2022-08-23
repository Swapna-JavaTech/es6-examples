class Book{
    constructor(bookName,author){
        this.bookName = bookName;
        this.author = author;
    }
    show(){
        console.log(`Book Name :  ${this.bookName}`)
    }
}

//object
const book = new Book(
    "JavaScript:The Good Parts",
    "Douglas Crockford"
);

console.log(book.bookName);