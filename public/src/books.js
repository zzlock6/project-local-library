
//what if id passed isnt in authors array 
function findAuthorById(authors, id) {
//find function to return the first author with given id  
  let result = authors.find((author) => author.id === id);
return result
}


//what if id passed isnt in books array
function findBookById(books, id) {
//edge case
  if(!id) return "Enter Valid ID";
//find function to return the first book with given id
  let result = books.find((book) => book.id === id);
return result
}



function partitionBooksByBorrowedStatus(books) {
//edge cases
if(!books) books =[];  
//declare arrays for books currently in the library or out of the library
  let inLibrary = [];
  let outLibrary = [];
  books.forEach((book) => {
//destructuring to isolate that new variable & determine if true/false  
    const status = book.borrows[0];
//depending on status push book into corresponding array    
    if(status.returned === true) {
      inLibrary.push(book);
    } else { 
      outLibrary.push(book);
    }
  });
//adding the 2 arrays to result without seperating them    
  const result = [ outLibrary, inLibrary];
  return result
}




//what if books.borrows conatins an account not found in accounts
function getBorrowersForBook(book, accounts) {
//edge cases
if(!book) book = {};  
//declare result as an array
 let result =[];
//isolate borrows array & slice to first 10 entries 
 const recentBorrowers = book.borrows.slice(0,10);
//iterate through each borrower in borrows 
 recentBorrowers.forEach((borrower) => {
//create new object for the matching account
  let match = accounts.find((account) => account.id === borrower.id); 
//add returned variable to match object
  let returned = borrower.returned;
  match = {...match, returned};
//push final match object into result
  result.push(match);
 }); return result
 };



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
