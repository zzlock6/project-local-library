
function findAccountById(accounts, id) {
//edge cases  
  if(!id) return ("Enter Valid ID");
//find function to return the first account with given id 
 return accounts.find((account) => account.id === id);
}


function sortAccountsByLastName(accounts) {
//edge cases
 if(!accounts)accounts = [];
//sort function to change accounts array to alphabetical order 
 accounts.sort((acct1, acct2) => 
 acct1.name.last.toLowerCase() > acct2.name.last.toLowerCase() ? 1:-1 
 );
return accounts
}


 

function getTotalNumberOfBorrows(account, books) {
//edge cases 
  if(!account) account = {};
  if(!books) books = [];
//set total to 0 incase books is empty  
  let total = 0; 
//object destructuring   
  const AId = account.id;  
//isolate each book in books   
  books.forEach((book) => {
//filter which books have been borrowed by given account    
    let history = book.borrows;
    let num = history.filter((borrow) => borrow.id === AId);
//add number of borrows to toal     
    total = total + num.length
  }); return total
}



function getBooksPossessedByAccount(account, books, authors) {
//declare result as an array  
  let result=[];
//object destructuring   
  const AId = account.id;
//isolate each book in books  
  books.forEach((book) => {
  const history = book.borrows;
  const writer = book.authorId;
//filter function to find books with corresponding account ID & that same borrows entry returned = false  
  let borrowed = history.filter((borrow) => borrow.id === AId && borrow.returned === false);
//if any books fit the filter stipulations find their corresponding author  
  if(borrowed.length > 0){
    let author = authors.find((author) => author.id === writer);
//change book object to include author object nested inside
    book = {...book, author}
//push new book object into result array    
    result.push(book)
  }
  }); return result
};


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
