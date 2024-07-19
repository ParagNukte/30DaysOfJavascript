// **Day 7: Objects**

// **Tasks/Activities:**

// **Activity 1: Object Creation and Access**
// - **Task 1:** Create an object representing a book with the title, author, year, and page count. Print the object to the console.

const book = {
  title: "Half Girlfriend",
  author: "Chetan Bhagat",
  year: "2015",
  pageCount: "231",
};
console.log(book);

// - **Task 2:** Access and log the title and author properties of the book object.

console.log("Book Title :: ", book.title);
console.log("Book Author :: ", book.author);

// **Activity 2: Object Methods**
// - **Task 3:** Add a method to the book object that returns a string with book the title and author and log the result of calling this method.

const bookInfo = () => {
  return `Title: ${book.title}, Author: ${book.author}`;
};
console.log(bookInfo());

//Task 4:** Add a method to the book object that takes year as a parameter and log the object

const updateYear = (year) => {
  book.year = year;
  return book;
};
console.log(updateYear(1839));
// Activiity 3:
//Task 5 : Create a nested object representing a library with properties like name and books (an array of the book objects ) and log the library object to console.

const library = {
  name: "City Library",
  books: [
    {
      title: "Half Girlfriend",
      author: "Chetan Bhagat",
      year: "2015",
      pageCount: "231",
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      year: "1988",
      pageCount: "208",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: "1960",
      pageCount: "281",
    },
    {
      title: "1984",
      author: "George Orwell",
      year: "1949",
      pageCount: "328",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: "1813",
      pageCount: "279",
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: "1925",
      pageCount: "180",
    },
  ],
};

//Task 6 : Access and log the name of the library and the titles of all the books
console.log("Library Name :: ", library.name);
library.books.forEach((book, index) => {
  console.log(index + 1, " ", book.title);
});

//Activity 4 -- this keywowrd
//Task 7: Add a method to a book object  that uses  the this keyword to return the string with books title, year and log the result of the calling method

const book1 = {
  title: "Half Girlfriend",
  author: "Chetan Bhagat",
  year: "2015",
  pageCount: "231",
  getBookInfo: function () {
    return `using this keyword : Title :: ${this.title} :: Year :: ${this.year} `;
  },
};
console.log(book1.getBookInfo());

// Activity 5 -- Object iteration
// Task 8: Use a for in loop to iterate over the properties of the book object and log each property and its value;

for (const property in book) {
  console.log(`${property} :: ${book[property]}`);
}

//Task 9: Use Object.keys and Object.values to log all keys and values of the book object 

console.log("All the Keys of book object", Object.keys(book))
console.log("All the Values of book object", Object.values(book))