// should return the account object when given a particular ID
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

// should return the list of accounts ordered by last name
function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => (a.name.last < b.name.last ? -1 : 1));
}

// should return the number of times an account has created a 'borrow' record
function getTotalNumberOfBorrows(account, books) {
  const { id: accId } = account;
  return books.reduce((total, book) => {
    return total + book.borrows.filter((borrow) => borrow.id === accId).length;
  }, 0);
}

// should return all of the books taken out by an account with the author embedded
function getBooksPossessedByAccount(account, books, authors) {
  const { id: accId } = account;
  const bookOut = books.filter((book) =>
    book.borrows.some((borrows) => !borrows.returned && borrows.id === accId)
  );
  bookOut.forEach((book) => {
    book.author = authors.find((author) => author.id === book.authorId);
  });
  return bookOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
