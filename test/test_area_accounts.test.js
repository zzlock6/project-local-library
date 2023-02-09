
const { expect } = require("chai");
const { findAccountById, sortAccountsByLastName, 
        getTotalNumberOfBorrows, getBooksPossessedByAccount } = require("../public/src/accounts");

//function test find account by id
describe("findAccountById", () => {
    it("should return the correct account", () => {
      //sample size of 2 accounts
      //parameter 2 provides second accounts id number
        const accounts = [
            {
              id: "5f446f2ecfaf0310387c9603",
              picture: "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
              age: 25,
              name: {
                first: "Esther",
                last: "Tucker",
              },
              company: "ZILLACON",
              email: "esther.tucker@zillacon.me",
              registered: "Thursday, May 28, 2015 2:51 PM",
            },
            {
              id: "5f446f2ed46724f41c9fc431",
              picture: "https://api.adorable.io/avatars/75/ferrell.morris@ecolight.com",
              age: 35,
              name: {
                first: "Ferrell",
                last: "Morris",
              },
              company: "ECOLIGHT",
              email: "ferrell.morris@ecolight.com",
              registered: "Thursday, February 8, 2018 1:16 PM",
            },
        ];
     const expected = accounts[1];
     const actual = findAccountById(accounts, "5f446f2ed46724f41c9fc431");

        expect(actual).to.equal(expected);
    });
});

//funciton test sort accounts by last name 
describe("sortAccountsByLastName", () =>{
  it("should sort the accounts by last name", () =>{
    //sample size of 3 accounts 
    //second account comes first in alphabetical order by last name "Morris"
    const accounts = [
      {
        id: "5f446f2ecfaf0310387c9603",
        picture: "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
        age: 25,
        name: {
          first: "Esther",
          last: "Tucker",
        },
        company: "ZILLACON",
        email: "esther.tucker@zillacon.me",
        registered: "Thursday, May 28, 2015 2:51 PM",
      },
      {
        id: "5f446f2ed46724f41c9fc431",
        picture: "https://api.adorable.io/avatars/75/ferrell.morris@ecolight.com",
        age: 35,
        name: {
          first: "Ferrell",
          last: "Morris",
        },
        company: "ECOLIGHT",
        email: "ferrell.morris@ecolight.com",
        registered: "Thursday, February 8, 2018 1:16 PM",
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        picture: "https://api.adorable.io/avatars/75/kristen.woods@codact.org",
        age: 23,
        name: {
          first: "Kristen",
          last: "Woods",
        },
        company: "CODACT",
        email: "kristen.woods@codact.org",
        registered: "Thursday, May 15, 2014 12:48 AM",
      },
  ];
  sortAccountsByLastName(accounts);
  const expected = "Morris";
  const actual = accounts[0].name.last;

  expect(actual).to.equal(expected);
  });
});

//funciton test get number of borrows for account given
describe("getTotalNumberOfBorrows", () => {
  it("should return the correct account", () => {
    //sample books array includes 3 books 
    //2 books were borrowed by account object given
      const account = {
            id: "5f446f2ecfaf0310387c9603",
            picture: "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
            age: 25,
            name: {
              first: "Esther",
              last: "Tucker",
            },
            company: "ZILLACON",
            email: "esther.tucker@zillacon.me",
            registered: "Thursday, May 28, 2015 2:51 PM",
          };
          const books = [
            //count 1 borrows[0]
            {
              id: "5f447132d487bd81da01e25e",
              title: "sit eiusmod occaecat eu magna",
              genre: "Science",
              authorId: 8,
              borrows: [
                {
                  id: "5f446f2ecfaf0310387c9603", 
                  returned: false,
                },
              ],
            },
            //count 2 borrows[1]
            {
              id: "5f4471329627160be1e8ce92",
              title: "esse ea veniam non occaecat",
              genre: "Classics",
              authorId: 10,
              borrows: [
                {
                  id: "5f446f2ed3609b719568a415",
                  returned: false,
                },
                {
                  id: "5f446f2ecfaf0310387c9603", 
                  returned: true,
                },
              ],
            },
            //N/A
            {
              id: "5f44713265e5d8d17789beb0", //no matching id in this books borrows array
              title: "tempor occaecat fugiat",
              genre: "Travel",
              authorId: 16,
              borrows: [
                {
                  id: "5f446f2e4eff1030e7316861",
                  returned: true,
                },
                {
                  id: "5f446f2ecc5c4787c403f844",
                  returned: true,
                },
                {
                  id: "5f446f2ee1661e64cde14e55",
                  returned: true,
                },
                {
                  id: "5f446f2e50cc2da9cd80efdb",
                  returned: true,
                },
                {
                  id: "5f446f2ef795e593cd3cd19d",
                  returned: true,
                },
                {
                  id: "5f446f2eae901a82e0259947",
                  returned: true,
                },
                {
                  id: "5f446f2e3e70bb4e1ab821c9",
                  returned: true,
                },
                {
                  id: "5f446f2ef2ab5f5a9f60c4f2",
                  returned: true,
                },
                {
                  id: "5f446f2e136866e4fe60c893",
                  returned: true,
                },
              ],
            },
          ];
   const expected = 2;
   const actual = getTotalNumberOfBorrows(account, books);

      expect(actual).to.equal(expected);

  });
});

//funciton test get books possessed by account given
describe("getBooksPossessedByAccount", () => {
  it("should return which books are checked out by account given + author info on those books", () => {
    //sample data includes 1 acount object, 3 book array, & 3 author array
    //books array, including 1 book still checked out by account given, 1 book that was 
    //checked out & returned by account given, 1 book that was not checked out by account given
    //authors array including ids 7-9, author 8 corresponds with the book account has checked out
      const account = {
            id: "5f446f2ecfaf0310387c9603",
            picture: "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
            age: 25,
            name: {
              first: "Esther",
              last: "Tucker",
            },
            company: "ZILLACON",
            email: "esther.tucker@zillacon.me",
            registered: "Thursday, May 28, 2015 2:51 PM",
          };
          const books = [
            //book currently checked out by given account
            {
              id: "5f447132d487bd81da01e25e",
              title: "sit eiusmod occaecat eu magna",
              genre: "Science",
              authorId: 8,
              borrows: [
                {
                  id: "5f446f2ecfaf0310387c9603",
                  returned: false,
                },
              ],
            },
            //book checked out & later returned
            {
              id: "5f4471329627160be1e8ce92",
              title: "esse ea veniam non occaecat",
              genre: "Classics",
              authorId: 10,
              borrows: [
                {
                  id: "5f446f2ed3609b719568a415",
                  returned: false,
                },
                {
                  id: "5f446f2ecfaf0310387c9603", //book checked out by account but returned = true shouldnt show up in result
                  returned: true,
                },
              ],
            },
            {
              id: "5f44713265e5d8d17789beb0", //no matching id in this books borrows array
              title: "tempor occaecat fugiat",
              genre: "Travel",
              authorId: 16,
              borrows: [
                {
                  id: "5f446f2e4eff1030e7316861",
                  returned: true,
                },
                {
                  id: "5f446f2ecc5c4787c403f844",
                  returned: true,
                },
                {
                  id: "5f446f2ee1661e64cde14e55",
                  returned: true,
                },
                {
                  id: "5f446f2e50cc2da9cd80efdb",
                  returned: true,
                },
                {
                  id: "5f446f2ef795e593cd3cd19d",
                  returned: true,
                },
                {
                  id: "5f446f2eae901a82e0259947",
                  returned: true,
                },
                {
                  id: "5f446f2e3e70bb4e1ab821c9",
                  returned: true,
                },
                {
                  id: "5f446f2ef2ab5f5a9f60c4f2",
                  returned: true,
                },
                {
                  id: "5f446f2e136866e4fe60c893",
                  returned: true,
                },
              ],
            },
          ];
          //author id 8 corresponds with the book checked out by given account
          const authors = [
            {
              id: 7,
              name: {
                first: "Ila",
                last: "Reid",
              },
            },
            {
              id: 8,
              name: {
                first: "Susanne",
                last: "Lawson",
              },
            },
            {
              id: 9,
              name: {
                first: "Olson",
                last: "Rowland",
              },
            },
          ];

      const actual = getBooksPossessedByAccount(account, books, authors);
      expect(actual.length).to.equal(1);

      const book = actual[0];
      expect(book.author.name).to.eql({ first: "Susanne", last: "Lawson" });
      expect(book.title).to.equal("sit eiusmod occaecat eu magna");

  });
});

