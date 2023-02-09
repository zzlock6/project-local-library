const { keys, values, concat } = require("../../test/fixtures/accounts.fixture");

function getTotalBooksCount(books) {
//edge case
  if(!books) books = [];
//declare total & set to 0 incase of empty array 
  let total = 0;
//for each book in books add 1 to total
  books.forEach((book) => {
    total = total + 1
  }); return total
};

function getTotalAccountsCount(accounts) {
//edge case
  if(!accounts) accounts = [];
//declare total & set to 0 incase of empty array 
  let total = 0;
//for each account in accounts add 1 to total
  accounts.forEach((account) => total = total +1);
  return total
};

function getBooksBorrowedCount(books) {
//declare total & set to 0 incase of empty array 
  let total = 0;
//for each book in books if the first object in borrows = false add 1 to total 
  books.forEach((book) =>{
//(destructuring) status = first object in borrows array 
    let status = book.borrows[0];
    if(status.returned === false){
      total = total + 1;
    };
  }); return total
}


//helper funciton used for ranking
function ranking(lists,num) {
//edge case if only the array is entered dont slice only sort
  if(!num) num = lists.length;
//sort numerical value in lists from greatest to least
 lists.sort((listA, listB) => listB.count - listA.count);
//limit length of array being returned to num parameter
 return lists.slice(0,num)
}



function getMostCommonGenres(books) {
  //edge case
  if(!books) books = [];
  //declare result
  let result = [];
  //reduce funtion to create object with corresponding genre name as key & count as value
 const getGenres = books.reduce((acc,cur) => {
  const category = cur.genre
  if(acc[category]){
    acc[category] = acc[category] +1;
  } else{
    acc[category] = 1
  }
  return acc
 },{})
 
 //dont want to return getGenres we want to use it in object destructuring
 //create array with Object.keys using genre names 
 let GenreNames = Object.keys(getGenres);
 //map function to tie corresponding count value with genre name keys
 result = GenreNames.map((genre) => {
  return { name: genre, count: getGenres[genre]};
 });
 //use helper function to sort & limit array length to 5
 return ranking(result,5);

};




function getMostPopularBooks(books) {
//edge case  
  if(!books) books =[];
//declare result as an array & incase of empty books array parameter
  let result=[];
//isolate each book in books 
   books.forEach((book) => {
//(destructuring)
    const history = book.borrows;
//create varibles used for object being created
    const count = history.length;
    const name = book.title;
    let plusCount = {name, count};
//push each iteration into result array  
    result.push(plusCount)
  });
//use helper function to sort & slice result array  
return ranking(result,5)
};



function getMostPopularAuthors(books, authors) {
//declare result as an array  
  let result = [];
//isolate each book & count the number of borrows    
  const getBorrows = books.forEach((book) =>{   
//destructuring to create usable varibles     
    let count = 0;     
    const writer = book.authorId;
//find function to find which author wrote the book
    const getAuthName = authors.find((author) => author.id === writer);
    const NameApart = getAuthName.name
//use concat to combine first & last name to 1 string
    const fullName = NameApart.first.concat(" ",NameApart.last)
//count # of times each book has been checked out
    const history = book.borrows;
    const num = history.length;
    count = count + num;
//create object with the only 2 pieces of info we need, author name & count of borrows for each book 
    let plusCount = {name: fullName, count};
//push new object into result    
    result.push(plusCount)
  }); 
//reduce function to combine reoccuring authors in our result object
  const uniqueAuthors = result.reduce((acc,cur) => {
    const Author = cur.name
    if(acc[Author]){
      acc[Author] = acc[Author] + cur.count;
    } else{
      acc[Author] = cur.count
    }
    return acc
   },{})
//create an array using the keys in object returned from unqiueAuthors   
   let authNames = Object.keys(uniqueAuthors);
//map function to tie corresponding count value with author name keys in new array
   result = authNames.map((name) => {
    return { name: name, count: uniqueAuthors[name]};
   });
//use helper function to sort & limit array length to 5
return ranking(result,5)
};


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
