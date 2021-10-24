// should return the total number of books in the array
// should return zero if the array is empty
function getTotalBooksCount(books) {
  return books.length;
}

//  should return the total number of books in the array
// should return zero if the array is empty
function getTotalAccountsCount(accounts) {
  return accounts.length;
}

// should return the total number of books that are currently borrowed
function getBooksBorrowedCount(books) {
  return books.reduce(
    (acc, book) =>
      acc + book.borrows.filter((borrow) => !borrow.returned).length,
    0
  );
}

// should return an ordered list of most common genres
// should limit the list to the top five
function getMostCommonGenres(books) {
  const genres = books.reduce((acc, book) => {
    const { genre } = book;
    if (!acc[genre]) acc[genre] = { name: genre, count: 1 };
    else acc[genre].count++;
    return acc;
  }, {});
  return Object.values(genres)
    .sort((a, b) => (a.count < b.count ? 1 : -1))
    .slice(0, 5);
}

// should return an ordered list of most popular books
// should limit the list to the top five
function getMostPopularBooks(books) {
  return books
    .map((book) => {
      return { name: book.title, count: book.borrows.length };
    })
    .sort((a, b) => (a.count < b.count ? 1 : -1))
    .slice(0, 5);
}

// should return an ordered list of most popular authors
// should limit the list to the top five
function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
    const authorList = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0,
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        authorList.count += book.borrows.length;
      }
    });
    result.push(authorList);
  });
  return result.sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
