/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
let exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
class Book {
    title;
    author;
    year;
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
const reviews = [];
function displayBook(book) {
    const bookList = document.getElementById("book-list");
    const bookDiv = document.createElement("div");
    bookDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p>By ${book.author}, ${book.year}</p>
  `;
    bookList?.appendChild(bookDiv);
}
function addReview(bookId, rating, comment) {
    const review = {
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsTUFBTSxJQUFJO0lBQ1IsS0FBSyxDQUFTO0lBQ2QsTUFBTSxDQUFTO0lBQ2YsSUFBSSxDQUFTO0lBRWIsWUFBWSxLQUFhLEVBQUUsTUFBYyxFQUFFLElBQVk7UUFDckQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztDQUNGO0FBUUQsTUFBTSxPQUFPLEdBQWEsRUFBRSxDQUFDO0FBRTdCLFNBQVMsV0FBVyxDQUFDLElBQVU7SUFDN0IsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTlDLE9BQU8sQ0FBQyxTQUFTLEdBQUc7VUFDWixJQUFJLENBQUMsS0FBSztZQUNSLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUk7R0FDbEMsQ0FBQztJQUVGLFFBQVEsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUNoQixNQUFjLEVBQ2QsTUFBYyxFQUNkLE9BQWU7SUFFZixNQUFNLE1BQU0sR0FBVztRQUNyQixNQUFNO1FBQ04sTUFBTTtRQUNOLE9BQU87S0FDUixDQUFDO0lBRUYsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2QixDQUFDO0FBRUQsc0JBQXNCO0FBQ3RCLE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM3RCxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN4RSxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3RELE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFN0QsZ0JBQWdCO0FBQ2hCLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQixXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkIsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25CLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUVuQixjQUFjO0FBQ2QsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztBQUM1QyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3RDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLHVCQUF1QixDQUFDLENBQUM7QUFDekMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztBQUV6QyxzQ0FBc0M7QUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWRldi13ZWVrMS1hY3Rpdml0eS8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJvb2sge1xuICB0aXRsZTogc3RyaW5nO1xuICBhdXRob3I6IHN0cmluZztcbiAgeWVhcjogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCB5ZWFyOiBudW1iZXIpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5hdXRob3IgPSBhdXRob3I7XG4gICAgdGhpcy55ZWFyID0geWVhcjtcbiAgfVxufVxuXG5pbnRlcmZhY2UgUmV2aWV3IHtcbiAgYm9va0lkOiBudW1iZXI7XG4gIHJhdGluZzogbnVtYmVyO1xuICBjb21tZW50OiBzdHJpbmc7XG59XG5cbmNvbnN0IHJldmlld3M6IFJldmlld1tdID0gW107XG5cbmZ1bmN0aW9uIGRpc3BsYXlCb29rKGJvb2s6IEJvb2spOiB2b2lkIHtcbiAgY29uc3QgYm9va0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvb2stbGlzdFwiKTtcbiAgY29uc3QgYm9va0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgYm9va0Rpdi5pbm5lckhUTUwgPSBgXG4gICAgPGgyPiR7Ym9vay50aXRsZX08L2gyPlxuICAgIDxwPkJ5ICR7Ym9vay5hdXRob3J9LCAke2Jvb2sueWVhcn08L3A+XG4gIGA7XG5cbiAgYm9va0xpc3Q/LmFwcGVuZENoaWxkKGJvb2tEaXYpO1xufVxuXG5mdW5jdGlvbiBhZGRSZXZpZXcoXG4gIGJvb2tJZDogbnVtYmVyLFxuICByYXRpbmc6IG51bWJlcixcbiAgY29tbWVudDogc3RyaW5nXG4pOiB2b2lkIHtcbiAgY29uc3QgcmV2aWV3OiBSZXZpZXcgPSB7XG4gICAgYm9va0lkLFxuICAgIHJhdGluZyxcbiAgICBjb21tZW50XG4gIH07XG5cbiAgcmV2aWV3cy5wdXNoKHJldmlldyk7XG59XG5cbi8vIENyZWF0ZSBib29rIG9iamVjdHNcbmNvbnN0IGJvb2sxID0gbmV3IEJvb2soXCJUaGUgSG9iYml0XCIsIFwiSi5SLlIuIFRvbGtpZW5cIiwgMTkzNyk7XG5jb25zdCBib29rMiA9IG5ldyBCb29rKFwiVGhlIExvcmQgb2YgdGhlIFJpbmdzXCIsIFwiSi5SLlIuIFRvbGtpZW5cIiwgMTk1NCk7XG5jb25zdCBib29rMyA9IG5ldyBCb29rKFwiMTk4NFwiLCBcIkdlb3JnZSBPcndlbGxcIiwgMTk0OSk7XG5jb25zdCBib29rNCA9IG5ldyBCb29rKFwiQW5pbWFsIEZhcm1cIiwgXCJHZW9yZ2UgT3J3ZWxsXCIsIDE5NDUpO1xuXG4vLyBEaXNwbGF5IGJvb2tzXG5kaXNwbGF5Qm9vayhib29rMSk7XG5kaXNwbGF5Qm9vayhib29rMik7XG5kaXNwbGF5Qm9vayhib29rMyk7XG5kaXNwbGF5Qm9vayhib29rNCk7XG5cbi8vIEFkZCByZXZpZXdzXG5hZGRSZXZpZXcoMSwgNSwgXCJBbiBhbWF6aW5nIGZhbnRhc3kgYm9vay5cIik7XG5hZGRSZXZpZXcoMiwgNCwgXCJBIGdyZWF0IGFkdmVudHVyZS5cIik7XG5hZGRSZXZpZXcoMywgNSwgXCJBIHZlcnkgcG93ZXJmdWwgYm9vay5cIik7XG5hZGRSZXZpZXcoNCwgNCwgXCJTaG9ydCBidXQgbWVhbmluZ2Z1bC5cIik7XG5cbi8vIFNob3cgcmV2aWV3cyBpbiB0aGUgYnJvd3NlciBjb25zb2xlXG5jb25zb2xlLmxvZyhyZXZpZXdzKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==