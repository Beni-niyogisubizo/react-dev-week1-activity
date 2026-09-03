/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

var Book = /** @class */ (function () {
    function Book(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    return Book;
}());
var reviews = [];
function displayBook(book) {
    var bookList = document.getElementById("book-list");
    var bookDiv = document.createElement("div");
    bookDiv.innerHTML = "\n    <h2>".concat(book.title, "</h2>\n    <p>By ").concat(book.author, ", ").concat(book.year, "</p>\n  ");
    bookList === null || bookList === void 0 ? void 0 : bookList.appendChild(bookDiv);
}
function addReview(bookId, rating, comment) {
    var review = {
        bookId: bookId,
        rating: rating,
        comment: comment
    };
    reviews.push(review);
}
// Create book objects
var book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
var book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);
var book3 = new Book("1984", "George Orwell", 1949);
var book4 = new Book("Animal Farm", "George Orwell", 1945);
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtZGV2LXdlZWsxLWFjdGl2aXR5Ly4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQm9vayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCb29rKHRpdGxlLCBhdXRob3IsIHllYXIpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmF1dGhvciA9IGF1dGhvcjtcbiAgICAgICAgdGhpcy55ZWFyID0geWVhcjtcbiAgICB9XG4gICAgcmV0dXJuIEJvb2s7XG59KCkpO1xudmFyIHJldmlld3MgPSBbXTtcbmZ1bmN0aW9uIGRpc3BsYXlCb29rKGJvb2spIHtcbiAgICB2YXIgYm9va0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvb2stbGlzdFwiKTtcbiAgICB2YXIgYm9va0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9va0Rpdi5pbm5lckhUTUwgPSBcIlxcbiAgICA8aDI+XCIuY29uY2F0KGJvb2sudGl0bGUsIFwiPC9oMj5cXG4gICAgPHA+QnkgXCIpLmNvbmNhdChib29rLmF1dGhvciwgXCIsIFwiKS5jb25jYXQoYm9vay55ZWFyLCBcIjwvcD5cXG4gIFwiKTtcbiAgICBib29rTGlzdCA9PT0gbnVsbCB8fCBib29rTGlzdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYm9va0xpc3QuYXBwZW5kQ2hpbGQoYm9va0Rpdik7XG59XG5mdW5jdGlvbiBhZGRSZXZpZXcoYm9va0lkLCByYXRpbmcsIGNvbW1lbnQpIHtcbiAgICB2YXIgcmV2aWV3ID0ge1xuICAgICAgICBib29rSWQ6IGJvb2tJZCxcbiAgICAgICAgcmF0aW5nOiByYXRpbmcsXG4gICAgICAgIGNvbW1lbnQ6IGNvbW1lbnRcbiAgICB9O1xuICAgIHJldmlld3MucHVzaChyZXZpZXcpO1xufVxuLy8gQ3JlYXRlIGJvb2sgb2JqZWN0c1xudmFyIGJvb2sxID0gbmV3IEJvb2soXCJUaGUgSG9iYml0XCIsIFwiSi5SLlIuIFRvbGtpZW5cIiwgMTkzNyk7XG52YXIgYm9vazIgPSBuZXcgQm9vayhcIlRoZSBMb3JkIG9mIHRoZSBSaW5nc1wiLCBcIkouUi5SLiBUb2xraWVuXCIsIDE5NTQpO1xudmFyIGJvb2szID0gbmV3IEJvb2soXCIxOTg0XCIsIFwiR2VvcmdlIE9yd2VsbFwiLCAxOTQ5KTtcbnZhciBib29rNCA9IG5ldyBCb29rKFwiQW5pbWFsIEZhcm1cIiwgXCJHZW9yZ2UgT3J3ZWxsXCIsIDE5NDUpO1xuLy8gRGlzcGxheSBib29rc1xuZGlzcGxheUJvb2soYm9vazEpO1xuZGlzcGxheUJvb2soYm9vazIpO1xuZGlzcGxheUJvb2soYm9vazMpO1xuZGlzcGxheUJvb2soYm9vazQpO1xuLy8gQWRkIHJldmlld3NcbmFkZFJldmlldygxLCA1LCBcIkFuIGFtYXppbmcgZmFudGFzeSBib29rLlwiKTtcbmFkZFJldmlldygyLCA0LCBcIkEgZ3JlYXQgYWR2ZW50dXJlLlwiKTtcbmFkZFJldmlldygzLCA1LCBcIkEgdmVyeSBwb3dlcmZ1bCBib29rLlwiKTtcbmFkZFJldmlldyg0LCA0LCBcIlNob3J0IGJ1dCBtZWFuaW5nZnVsLlwiKTtcbi8vIFNob3cgcmV2aWV3cyBpbiB0aGUgYnJvd3NlciBjb25zb2xlXG5jb25zb2xlLmxvZyhyZXZpZXdzKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==