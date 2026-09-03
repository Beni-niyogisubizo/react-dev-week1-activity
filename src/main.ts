class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

interface Review {
  bookId: number;
  rating: number;
  comment: string;
}

const reviews: Review[] = [];

function displayBook(book: Book): void {
  const bookList = document.getElementById("book-list");
  const bookDiv = document.createElement("div");

  bookDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p>By ${book.author}, ${book.year}</p>
  `;

  bookList?.appendChild(bookDiv);
}

function addReview(
  bookId: number,
  rating: number,
  comment: string
): void {
  const review: Review = {
    bookId,
    rating,
    comment
  };

  reviews.push(review);
}

// Create book objects
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);
const book3 = new Book("1984", "George Orwell", 1949);
const book4 = new Book("Animal Farm", "George Orwell", 1945);

// Display books
displayBook(book1);
displayBook(book2);
displayBook(book3);
displayBook(book4);

// Add reviews
addReview(1, 5, "An amazing fantasy book.");
addReview(2, 4, "A great adventure.");
addReview(3, 5, "A very powerful book.");
addReview(4, 4, "Short but meaningful.");

// Show reviews in the browser console
console.log(reviews);
