const { expect } = require("chai");
const { getTotalBooksCount, getTotalAccountsCount,
        getBooksBorrowedCount, getMostCommonGenres,
        ranking, getMostPopularAuthors,
        getMostPopularBooks, } = require("../public/src/home");

//function test get total books count
describe("getTotalBooksCount", () => {
    it("should return the number of books in the array", () => {
    //smaller sample size 3 books
        const books = [
          {
            id: "5f447132d487bd81da01e25e",
            title: "sit eiusmod occaecat eu magna",
            genre: "Science",
            authorId: 8,
            borrows: [
              {
                id: "5f446f2e2cfa3e1d234679b9",
                returned: false,
              },
              {
                id: "5f446f2ed3609b719568a415",
                returned: true,
              },
              {
                id: "5f446f2e1c71888e2233621e",
                returned: true,
              },
              {
                id: "5f446f2e6059326d9feb9a68",
                returned: true,
              },
              {
                id: "5f446f2ede05a0b1e3394d8b",
                returned: true,
              },
              {
                id: "5f446f2e4081699cdc6a2735",
                returned: true,
              },
              {
                id: "5f446f2e3900dfec59489477",
                returned: true,
              },
              {
                id: "5f446f2e6059326d9feb9a68",
                returned: true,
              },
              {
                id: "5f446f2e409f8883af2955dd",
                returned: true,
              },
              {
                id: "5f446f2e3900dfec59489477",
                returned: true,
              },
              {
                id: "5f446f2eae901a82e0259947",
                returned: true,
              },
              {
                id: "5f446f2ef2ab5f5a9f60c4f2",
                returned: true,
              },
              {
                id: "5f446f2ea6b68cf6f85f6e28",
                returned: true,
              },
              {
                id: "5f446f2eed18105706d6ca19",
                returned: true,
              },
              {
                id: "5f446f2eae901a82e0259947",
                returned: true,
              },
              {
                id: "5f446f2e91c2af00cb74e82b",
                returned: true,
              },
              {
                id: "5f446f2e5aa2bb5545a0f8a6",
                returned: true,
              },
              {
                id: "5f446f2ea508b6a99c3e42c6",
                returned: true,
              },
              {
                id: "5f446f2e50cc2da9cd80efdb",
                returned: true,
              },
              {
                id: "5f446f2e0b3e2ff72fc503e7",
                returned: true,
              },
              {
                id: "5f446f2e91c2af00cb74e82b",
                returned: true,
              },
              {
                id: "5f446f2ef795e593cd3cd19d",
                returned: true,
              },
              {
                id: "5f446f2e2f35653fa80bf490",
                returned: true,
              },
              {
                id: "5f446f2e7b9cd304fed3a8bc",
                returned: true,
              },
              {
                id: "5f446f2ed9aac23c0340aab2",
                returned: true,
              },
            ],
          },
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
                id: "5f446f2ec32d71dabec35b06",
                returned: true,
              },
              {
                id: "5f446f2ef2ab5f5a9f60c4f2",
                returned: true,
              },
              {
                id: "5f446f2e7a1be21e362b82f9",
                returned: true,
              },
              {
                id: "5f446f2e6059326d9feb9a68",
                returned: true,
              },
              {
                id: "5f446f2ec32d71dabec35b06",
                returned: true,
              },
              {
                id: "5f446f2e59f9380a1d03d766",
                returned: true,
              },
              {
                id: "5f446f2e141b97d842b680fd",
                returned: true,
              },
              {
                id: "5f446f2e409f8883af2955dd",
                returned: true,
              },
              {
                id: "5f446f2ee176f80b8d5d24da",
                returned: true,
              },
              {
                id: "5f446f2ef795e593cd3cd19d",
                returned: true,
              },
              {
                id: "5f446f2eef419207c5fa4ec9",
                returned: true,
              },
              {
                id: "5f446f2e50cc2da9cd80efdb",
                returned: true,
              },
              {
                id: "5f446f2e4081699cdc6a2735",
                returned: true,
              },
            ],
          },
          {
            id: "5f44713265e5d8d17789beb0",
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
     const expected = 3;
     const actual = getTotalBooksCount(books);
  
        expect(actual).to.equal(expected);
    });
  });

//function test get total accounts count
  describe("getTotalAccountsCount", () => {
    it("should return the number of accounts in the array", () => {
//small sample size 2 accounts
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
     const expected = 2;
     const actual = getTotalAccountsCount(accounts);
  
        expect(actual).to.equal(expected);
    });
  });

//function test get books borrowed count
  describe("getBooksBorrowedCount", () => {
    it("should return the number of books in the array that have not been returned yet", () => {
//sample size 3 books 
//1 has been returned the other 2 should represent borrowed count
        const books = [
        //count 1
          {
            id: "5f447132d487bd81da01e25e",
            title: "sit eiusmod occaecat eu magna",
            genre: "Science",
            authorId: 8,
            borrows: [
              {
                id: "5f446f2e2cfa3e1d234679b9",
                returned: false, 
              },
              {
                id: "5f446f2ed3609b719568a415",
                returned: true,
              },
              {
                id: "5f446f2e1c71888e2233621e",
                returned: true,
              },
              {
                id: "5f446f2e6059326d9feb9a68",
                returned: true,
              },
              {
                id: "5f446f2ede05a0b1e3394d8b",
                returned: true,
              },
              {
                id: "5f446f2e4081699cdc6a2735",
                returned: true,
              },
              {
                id: "5f446f2e3900dfec59489477",
                returned: true,
              },
              {
                id: "5f446f2e6059326d9feb9a68",
                returned: true,
              },
              {
                id: "5f446f2e409f8883af2955dd",
                returned: true,
              },
              {
                id: "5f446f2e3900dfec59489477",
                returned: true,
              },
              {
                id: "5f446f2eae901a82e0259947",
                returned: true,
              },
              {
                id: "5f446f2ef2ab5f5a9f60c4f2",
                returned: true,
              },
              {
                id: "5f446f2ea6b68cf6f85f6e28",
                returned: true,
              },
              {
                id: "5f446f2eed18105706d6ca19",
                returned: true,
              },
              {
                id: "5f446f2eae901a82e0259947",
                returned: true,
              },
              {
                id: "5f446f2e91c2af00cb74e82b",
                returned: true,
              },
              {
                id: "5f446f2e5aa2bb5545a0f8a6",
                returned: true,
              },
              {
                id: "5f446f2ea508b6a99c3e42c6",
                returned: true,
              },
              {
                id: "5f446f2e50cc2da9cd80efdb",
                returned: true,
              },
              {
                id: "5f446f2e0b3e2ff72fc503e7",
                returned: true,
              },
              {
                id: "5f446f2e91c2af00cb74e82b",
                returned: true,
              },
              {
                id: "5f446f2ef795e593cd3cd19d",
                returned: true,
              },
              {
                id: "5f446f2e2f35653fa80bf490",
                returned: true,
              },
              {
                id: "5f446f2e7b9cd304fed3a8bc",
                returned: true,
              },
              {
                id: "5f446f2ed9aac23c0340aab2",
                returned: true,
              },
            ],
          },
          //count 2
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
                id: "5f446f2ec32d71dabec35b06",
                returned: true,
              },
              {
                id: "5f446f2ef2ab5f5a9f60c4f2",
                returned: true,
              },
              {
                id: "5f446f2e7a1be21e362b82f9",
                returned: true,
              },
              {
                id: "5f446f2e6059326d9feb9a68",
                returned: true,
              },
              {
                id: "5f446f2ec32d71dabec35b06",
                returned: true,
              },
              {
                id: "5f446f2e59f9380a1d03d766",
                returned: true,
              },
              {
                id: "5f446f2e141b97d842b680fd",
                returned: true,
              },
              {
                id: "5f446f2e409f8883af2955dd",
                returned: true,
              },
              {
                id: "5f446f2ee176f80b8d5d24da",
                returned: true,
              },
              {
                id: "5f446f2ef795e593cd3cd19d",
                returned: true,
              },
              {
                id: "5f446f2eef419207c5fa4ec9",
                returned: true,
              },
              {
                id: "5f446f2e50cc2da9cd80efdb",
                returned: true,
              },
              {
                id: "5f446f2e4081699cdc6a2735",
                returned: true,
              },
            ],
          },
          //returned = true so this wont add to the count
          {
            id: "5f44713265e5d8d17789beb0",
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
     const actual = getBooksBorrowedCount(books);
  
        expect(actual).to.equal(expected);
    });
  });

//function test get most common genres
  describe("getMostCommonGenres", () => {
    it("should return an array containing 5 ranked objects { genre & count}", () => {
        //bigger sample size than other test the result should rank fiction 3 as first
        // the second object should be either travel or young adult @ a count of 2 which is why 
        //when testing [second] we only test the count
        //result array should be limited to 5
        const books = [
            //fiction 1
            {
              id: "5f447132d487bd81da01e25e",
              title: "sit eiusmod occaecat eu magna",
              genre: "Fiction",
              authorId: 8,
              borrows: [
                {
                  id: "5f446f2e2cfa3e1d234679b9",
                  returned: false,
                },
                {
                  id: "5f446f2ed3609b719568a415",
                  returned: true,
                },
                {
                  id: "5f446f2e1c71888e2233621e",
                  returned: true,
                },
                {
                  id: "5f446f2e6059326d9feb9a68",
                  returned: true,
                },
                {
                  id: "5f446f2ede05a0b1e3394d8b",
                  returned: true,
                },
                {
                  id: "5f446f2e4081699cdc6a2735",
                  returned: true,
                },
                {
                  id: "5f446f2e3900dfec59489477",
                  returned: true,
                },
                {
                  id: "5f446f2e6059326d9feb9a68",
                  returned: true,
                },
                {
                  id: "5f446f2e409f8883af2955dd",
                  returned: true,
                },
                {
                  id: "5f446f2e3900dfec59489477",
                  returned: true,
                },
                {
                  id: "5f446f2eae901a82e0259947",
                  returned: true,
                },
                {
                  id: "5f446f2ef2ab5f5a9f60c4f2",
                  returned: true,
                },
                {
                  id: "5f446f2ea6b68cf6f85f6e28",
                  returned: true,
                },
                {
                  id: "5f446f2eed18105706d6ca19",
                  returned: true,
                },
                {
                  id: "5f446f2eae901a82e0259947",
                  returned: true,
                },
                {
                  id: "5f446f2e91c2af00cb74e82b",
                  returned: true,
                },
                {
                  id: "5f446f2e5aa2bb5545a0f8a6",
                  returned: true,
                },
                {
                  id: "5f446f2ea508b6a99c3e42c6",
                  returned: true,
                },
                {
                  id: "5f446f2e50cc2da9cd80efdb",
                  returned: true,
                },
                {
                  id: "5f446f2e0b3e2ff72fc503e7",
                  returned: true,
                },
                {
                  id: "5f446f2e91c2af00cb74e82b",
                  returned: true,
                },
                {
                  id: "5f446f2ef795e593cd3cd19d",
                  returned: true,
                },
                {
                  id: "5f446f2e2f35653fa80bf490",
                  returned: true,
                },
                {
                  id: "5f446f2e7b9cd304fed3a8bc",
                  returned: true,
                },
                {
                  id: "5f446f2ed9aac23c0340aab2",
                  returned: true,
                },
              ],
            },
            //fiction 2
            {
              id: "5f4471329627160be1e8ce92",
              title: "esse ea veniam non occaecat",
              genre: "Fiction",
              authorId: 10,
              borrows: [
                {
                  id: "5f446f2ed3609b719568a415",
                  returned: false,
                },
                {
                  id: "5f446f2ec32d71dabec35b06",
                  returned: true,
                },
                {
                  id: "5f446f2ef2ab5f5a9f60c4f2",
                  returned: true,
                },
                {
                  id: "5f446f2e7a1be21e362b82f9",
                  returned: true,
                },
                {
                  id: "5f446f2e6059326d9feb9a68",
                  returned: true,
                },
                {
                  id: "5f446f2ec32d71dabec35b06",
                  returned: true,
                },
                {
                  id: "5f446f2e59f9380a1d03d766",
                  returned: true,
                },
                {
                  id: "5f446f2e141b97d842b680fd",
                  returned: true,
                },
                {
                  id: "5f446f2e409f8883af2955dd",
                  returned: true,
                },
                {
                  id: "5f446f2ee176f80b8d5d24da",
                  returned: true,
                },
                {
                  id: "5f446f2ef795e593cd3cd19d",
                  returned: true,
                },
                {
                  id: "5f446f2eef419207c5fa4ec9",
                  returned: true,
                },
                {
                  id: "5f446f2e50cc2da9cd80efdb",
                  returned: true,
                },
                {
                  id: "5f446f2e4081699cdc6a2735",
                  returned: true,
                },
              ],
            },
            //fiction 3
            {
              id: "5f44713265e5d8d17789beb0",
              title: "tempor occaecat fugiat",
              genre: "Fiction",
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
            //young adult 1
            {
              id: "5f447132ee5532b325d575ac",
              title: "commodo ut ipsum",
              genre: "Young Adult",
              authorId: 31,
              borrows: [
                {
                  id: "5f446f2e5e2952040e9f9b88",
                  returned: false,
                },
                {
                  id: "5f446f2e0cb6abe0576cf60d",
                  returned: true,
                },
                {
                  id: "5f446f2e2cfa3e1d234679b9",
                  returned: true,
                },
                {
                  id: "5f446f2e138a3841f7aeccf2",
                  returned: true,
                },
                {
                  id: "5f446f2e136866e4fe60c893",
                  returned: true,
                },
                {
                  id: "5f446f2ede05a0b1e3394d8b",
                  returned: true,
                },
                {
                  id: "5f446f2e1ad91e9aaa88b80c",
                  returned: true,
                },
                {
                  id: "5f446f2e91a138c3a8ac6980",
                  returned: true,
                },
                {
                  id: "5f446f2e4081699cdc6a2735",
                  returned: true,
                },
                {
                  id: "5f446f2e0b3e2ff72fc503e7",
                  returned: true,
                },
                {
                  id: "5f446f2e7b9cd304fed3a8bc",
                  returned: true,
                },
                {
                  id: "5f446f2ea508b6a99c3e42c6",
                  returned: true,
                },
                {
                  id: "5f446f2e73359bee0fec4ba9",
                  returned: true,
                },
                {
                  id: "5f446f2e1c71888e2233621e",
                  returned: true,
                },
                {
                  id: "5f446f2eed18105706d6ca19",
                  returned: true,
                },
                {
                  id: "5f446f2ed9aac23c0340aab2",
                  returned: true,
                },
                {
                  id: "5f446f2e93963fcd4e5adf00",
                  returned: true,
                },
                {
                  id: "5f446f2e7d3e00a5efe35b6e",
                  returned: true,
                },
                {
                  id: "5f446f2efa2e5110917e5929",
                  returned: true,
                },
                {
                  id: "5f446f2ebe8314bcec531cc5",
                  returned: true,
                },
                {
                  id: "5f446f2e91a138c3a8ac6980",
                  returned: true,
                },
                {
                  id: "5f446f2e07ed0822aa926d16",
                  returned: true,
                },
              ],
            },
            //Music 1
            {
              id: "5f44713285313723dc44e96b",
              title: "adipisicing irure excepteur",
              genre: "Music",
              authorId: 39,
              borrows: [
                {
                  id: "5f446f2e22469f38e4455c73",
                  returned: false,
                },
                {
                  id: "5f446f2e4081699cdc6a2735",
                  returned: true,
                },
                {
                  id: "5f446f2efa7fe184c4014dd2",
                  returned: true,
                },
                {
                  id: "5f446f2edc76a41729492d41",
                  returned: true,
                },
                {
                  id: "5f446f2ec32d71dabec35b06",
                  returned: true,
                },
                {
                  id: "5f446f2e1ad91e9aaa88b80c",
                  returned: true,
                },
                {
                  id: "5f446f2e4eff1030e7316861",
                  returned: true,
                },
                {
                  id: "5f446f2e0cb6abe0576cf60d",
                  returned: true,
                },
                {
                  id: "5f446f2e3e70bb4e1ab821c9",
                  returned: true,
                },
                {
                  id: "5f446f2eae901a82e0259947",
                  returned: true,
                },
                {
                  id: "5f446f2e189628dfd4e6225e",
                  returned: true,
                },
                {
                  id: "5f446f2ebe8314bcec531cc5",
                  returned: true,
                },
                {
                  id: "5f446f2eeb9463f976413b65",
                  returned: true,
                },
              ],
            },
            //travel 1
            {
              id: "5f4471320dd80f42b780c29e",
              title: "fugiat laborum officia ea aute",
              genre: "Travel",
              authorId: 9,
              borrows: [
                {
                  id: "5f446f2e5aa2bb5545a0f8a6",
                  returned: false,
                },
                {
                  id: "5f446f2ede4d3317692340da",
                  returned: true,
                },
                {
                  id: "5f446f2e22469f38e4455c73",
                  returned: true,
                },
                {
                  id: "5f446f2e2cfa3e1d234679b9",
                  returned: true,
                },
                {
                  id: "5f446f2ef7fc711c78b57e51",
                  returned: true,
                },
                {
                  id: "5f446f2ea508b6a99c3e42c6",
                  returned: true,
                },
                {
                  id: "5f446f2ee1661e64cde14e55",
                  returned: true,
                },
                {
                  id: "5f446f2e0b3e2ff72fc503e7",
                  returned: true,
                },
                {
                  id: "5f446f2ee734f727dfceefbd",
                  returned: true,
                },
                {
                  id: "5f446f2e1ad91e9aaa88b80c",
                  returned: true,
                },
                {
                  id: "5f446f2e138a3841f7aeccf2",
                  returned: true,
                },
                {
                  id: "5f446f2eeb9463f976413b65",
                  returned: true,
                },
                {
                  id: "5f446f2e9487cb7bf46726b5",
                  returned: true,
                },
                {
                  id: "5f446f2e0cb6abe0576cf60d",
                  returned: true,
                },
                {
                  id: "5f446f2e0f8e52a3ee861543",
                  returned: true,
                },
                {
                  id: "5f446f2e3900dfec59489477",
                  returned: true,
                },
                {
                  id: "5f446f2ee176f80b8d5d24da",
                  returned: true,
                },
                {
                  id: "5f446f2e91c2af00cb74e82b",
                  returned: true,
                },
                {
                  id: "5f446f2e2a4fcd687493a775",
                  returned: true,
                },
                {
                  id: "5f446f2ea6b68cf6f85f6e28",
                  returned: true,
                },
                {
                  id: "5f446f2e637138095dcc3db2",
                  returned: true,
                },
                {
                  id: "5f446f2e0f8e52a3ee861543",
                  returned: true,
                },
                {
                  id: "5f446f2e7eb4accbc92cb7a8",
                  returned: true,
                },
                {
                  id: "5f446f2e0f8e52a3ee861543",
                  returned: true,
                },
                {
                  id: "5f446f2e0f8e52a3ee861543",
                  returned: true,
                },
              ],
            },
            //young adult 2
            {
                id: "5f4471321db144e328b8a6e0",
                title: "culpa est do mollit ut",
                genre: "Young Adult",
                authorId: 25,
                borrows: [
                  {
                    id: "5f446f2ed46724f41c9fc431",
                    returned: false,
                  },
                  {
                    id: "5f446f2ea6b68cf6f85f6e28",
                    returned: true,
                  },
                  {
                    id: "5f446f2e2cfa3e1d234679b9",
                    returned: true,
                  },
                  {
                    id: "5f446f2e91a138c3a8ac6980",
                    returned: true,
                  },
                ],
            },
            //classics 1
            {
                id: "5f447132b1cd3c79b1fd29b8",
                title: "incididunt nostrud minim",
                genre: "Classics",
                authorId: 4,
                borrows: [
                  {
                    id: "5f446f2e91c2af00cb74e82b",
                    returned: false,
                  },
                  {
                    id: "5f446f2ea508b6a99c3e42c6",
                    returned: true,
                  },
                  {
                    id: "5f446f2e2cfa3e1d234679b9",
                    returned: true,
                  },
                  {
                    id: "5f446f2ead0070f44676f2f6",
                    returned: true,
                  },
                  {
                    id: "5f446f2e59f9380a1d03d766",
                    returned: true,
                  },
                  {
                    id: "5f446f2e637138095dcc3db2",
                    returned: true,
                  },
                  {
                    id: "5f446f2e93963fcd4e5adf00",
                    returned: true,
                  },
                  {
                    id: "5f446f2e7eb4accbc92cb7a8",
                    returned: true,
                  },
                  {
                    id: "5f446f2e5e2952040e9f9b88",
                    returned: true,
                  },
                  {
                    id: "5f446f2ea0502bf8cbc7676a",
                    returned: true,
                  },
                  {
                    id: "5f446f2ee176f80b8d5d24da",
                    returned: true,
                  },
                  {
                    id: "5f446f2e365320cc6ed66535",
                    returned: true,
                  },
                  {
                    id: "5f446f2ee734f727dfceefbd",
                    returned: true,
                  },
                  {
                    id: "5f446f2e22469f38e4455c73",
                    returned: true,
                  },
                  {
                    id: "5f446f2e2cfa3e1d234679b9",
                    returned: true,
                  },
                  {
                    id: "5f446f2ede05a0b1e3394d8b",
                    returned: true,
                  },
                  {
                    id: "5f446f2ede4d3317692340da",
                    returned: true,
                  },
                  {
                    id: "5f446f2e141b97d842b680fd",
                    returned: true,
                  },
                  {
                    id: "5f446f2ee5be00208a4481e0",
                    returned: true,
                  },
                  {
                    id: "5f446f2e7b9cd304fed3a8bc",
                    returned: true,
                  },
                  {
                    id: "5f446f2eaf32d8ddf09e8f83",
                    returned: true,
                  },
                  {
                    id: "5f446f2e637138095dcc3db2",
                    returned: true,
                  },
                  {
                    id: "5f446f2ed3609b719568a415",
                    returned: true,
                  },
                  {
                    id: "5f446f2e7eb4accbc92cb7a8",
                    returned: true,
                  },
                  {
                    id: "5f446f2ef795e593cd3cd19d",
                    returned: true,
                  },
                  {
                    id: "5f446f2ea0502bf8cbc7676a",
                    returned: true,
                  },
                  {
                    id: "5f446f2ea0502bf8cbc7676a",
                    returned: true,
                  },
                  {
                    id: "5f446f2ef055e8f3064b763e",
                    returned: true,
                  },
                  {
                    id: "5f446f2e365320cc6ed66535",
                    returned: true,
                  },
                  {
                    id: "5f446f2ea2944b432d63f072",
                    returned: true,
                  },
                ],
            },
            //travel 2
            {
                id: "5f4471325c455daaad7796a0",
                title: "deserunt voluptate irure fugiat sunt",
                genre: "Travel",
                authorId: 11,
                borrows: [
                  {
                    id: "5f446f2e1ad91e9aaa88b80c",
                    returned: true,
                  },
                  {
                    id: "5f446f2e637138095dcc3db2",
                    returned: true,
                  },
                  {
                    id: "5f446f2efa7fe184c4014dd2",
                    returned: true,
                  },
                ],
            },
            //nonfiction 1
            {
                id: "5f447132c962d9fa6a3b613d",
                title: "cupidatat nisi laboris sint",
                genre: "Nonfiction",
                authorId: 1,
                borrows: [
                  {
                    id: "5f446f2e7a1be21e362b82f9",
                    returned: false,
                  },
                  {
                    id: "5f446f2e2f35653fa80bf490",
                    returned: true,
                  },
                  {
                    id: "5f446f2ecc5c4787c403f844",
                    returned: true,
                  },
                  {
                    id: "5f446f2e5aa2bb5545a0f8a6",
                    returned: true,
                  },
                  {
                    id: "5f446f2e7eb4accbc92cb7a8",
                    returned: true,
                  },
                  {
                    id: "5f446f2e73359bee0fec4ba9",
                    returned: true,
                  },
                  {
                    id: "5f446f2e5a23764338868b10",
                    returned: true,
                  },
                  {
                    id: "5f446f2e07ed0822aa926d16",
                    returned: true,
                  },
                  {
                    id: "5f446f2e0cb6abe0576cf60d",
                    returned: true,
                  },
                  {
                    id: "5f446f2e7a1be21e362b82f9",
                    returned: true,
                  },
                ],
            },
            //business 1
            {
                id: "5f4471322e308348d0bbbd69",
                title: "laboris fugiat anim excepteur",
                genre: "Business",
                authorId: 30,
                borrows: [
                  {
                    id: "5f446f2e3e70bb4e1ab821c9",
                    returned: true,
                  },
                  {
                    id: "5f446f2ec926a2ac98231a64",
                    returned: true,
                  },
                  {
                    id: "5f446f2e91c2af00cb74e82b",
                    returned: true,
                  },
                  {
                    id: "5f446f2e7a1be21e362b82f9",
                    returned: true,
                  },
                  {
                    id: "5f446f2e440d5fae3ef4c941",
                    returned: true,
                  },
                  {
                    id: "5f446f2ef795e593cd3cd19d",
                    returned: true,
                  },
                  {
                    id: "5f446f2e6059326d9feb9a68",
                    returned: true,
                  },
                  {
                    id: "5f446f2ee5be00208a4481e0",
                    returned: true,
                  },
                  {
                    id: "5f446f2e2cfa3e1d234679b9",
                    returned: true,
                  },
                  {
                    id: "5f446f2ee176f80b8d5d24da",
                    returned: true,
                  },
                  {
                    id: "5f446f2eeb9463f976413b65",
                    returned: true,
                  },
                ],
            },
          ];
      const actual = getMostCommonGenres(books);
      const [first,second] = getMostCommonGenres(books);
   expect(first.name).to.eql("Fiction")
   expect(first.count).to.eql(3)
   expect(second.count).to.eql(2); 
   expect(actual.length).to.equal(5);
    });
  });
  
//function test get most popular books
describe("getMostPopularBooks", () => {
    it("should return an array containing 5 ranked objects { title & borrows count }", () => {
        //sample size includes 7 books with their counts shown comments above each object below 
        //result array should be sorted by borrows # & limited to 5 objects
        const books = [
            //borrowed 25x
            {
              id: "5f447132d487bd81da01e25e",
              title: "sit eiusmod occaecat eu magna",
              genre: "Fiction",
              authorId: 8,
              borrows: [
                {
                  id: "5f446f2e2cfa3e1d234679b9",
                  returned: false,
                },
                {
                  id: "5f446f2ed3609b719568a415",
                  returned: true,
                },
                {
                  id: "5f446f2e1c71888e2233621e",
                  returned: true,
                },
                {
                  id: "5f446f2e6059326d9feb9a68",
                  returned: true,
                },
                {
                  id: "5f446f2ede05a0b1e3394d8b",
                  returned: true,
                },
                {
                  id: "5f446f2e4081699cdc6a2735",
                  returned: true,
                },
                {
                  id: "5f446f2e3900dfec59489477",
                  returned: true,
                },
                {
                  id: "5f446f2e6059326d9feb9a68",
                  returned: true,
                },
                {
                  id: "5f446f2e409f8883af2955dd",
                  returned: true,
                },
                {
                  id: "5f446f2e3900dfec59489477",
                  returned: true,
                },
                {
                  id: "5f446f2eae901a82e0259947",
                  returned: true,
                },
                {
                  id: "5f446f2ef2ab5f5a9f60c4f2",
                  returned: true,
                },
                {
                  id: "5f446f2ea6b68cf6f85f6e28",
                  returned: true,
                },
                {
                  id: "5f446f2eed18105706d6ca19",
                  returned: true,
                },
                {
                  id: "5f446f2eae901a82e0259947",
                  returned: true,
                },
                {
                  id: "5f446f2e91c2af00cb74e82b",
                  returned: true,
                },
                {
                  id: "5f446f2e5aa2bb5545a0f8a6",
                  returned: true,
                },
                {
                  id: "5f446f2ea508b6a99c3e42c6",
                  returned: true,
                },
                {
                  id: "5f446f2e50cc2da9cd80efdb",
                  returned: true,
                },
                {
                  id: "5f446f2e0b3e2ff72fc503e7",
                  returned: true,
                },
                {
                  id: "5f446f2e91c2af00cb74e82b",
                  returned: true,
                },
                {
                  id: "5f446f2ef795e593cd3cd19d",
                  returned: true,
                },
                {
                  id: "5f446f2e2f35653fa80bf490",
                  returned: true,
                },
                {
                  id: "5f446f2e7b9cd304fed3a8bc",
                  returned: true,
                },
                {
                  id: "5f446f2ed9aac23c0340aab2",
                  returned: true,
                },
              ],
            },
            //borrowed 14x
            {
              id: "5f4471329627160be1e8ce92",
              title: "esse ea veniam non occaecat",
              genre: "Fiction",
              authorId: 10,
              borrows: [
                {
                  id: "5f446f2ed3609b719568a415",
                  returned: false,
                },
                {
                  id: "5f446f2ec32d71dabec35b06",
                  returned: true,
                },
                {
                  id: "5f446f2ef2ab5f5a9f60c4f2",
                  returned: true,
                },
                {
                  id: "5f446f2e7a1be21e362b82f9",
                  returned: true,
                },
                {
                  id: "5f446f2e6059326d9feb9a68",
                  returned: true,
                },
                {
                  id: "5f446f2ec32d71dabec35b06",
                  returned: true,
                },
                {
                  id: "5f446f2e59f9380a1d03d766",
                  returned: true,
                },
                {
                  id: "5f446f2e141b97d842b680fd",
                  returned: true,
                },
                {
                  id: "5f446f2e409f8883af2955dd",
                  returned: true,
                },
                {
                  id: "5f446f2ee176f80b8d5d24da",
                  returned: true,
                },
                {
                  id: "5f446f2ef795e593cd3cd19d",
                  returned: true,
                },
                {
                  id: "5f446f2eef419207c5fa4ec9",
                  returned: true,
                },
                {
                  id: "5f446f2e50cc2da9cd80efdb",
                  returned: true,
                },
                {
                  id: "5f446f2e4081699cdc6a2735",
                  returned: true,
                },
              ],
            },
            //borrowed 9x
            {
              id: "5f44713265e5d8d17789beb0",
              title: "tempor occaecat fugiat",
              genre: "Fiction",
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
            //borrowed 22x
            {
              id: "5f447132ee5532b325d575ac",
              title: "commodo ut ipsum",
              genre: "Young Adult",
              authorId: 31,
              borrows: [
                {
                  id: "5f446f2e5e2952040e9f9b88",
                  returned: false,
                },
                {
                  id: "5f446f2e0cb6abe0576cf60d",
                  returned: true,
                },
                {
                  id: "5f446f2e2cfa3e1d234679b9",
                  returned: true,
                },
                {
                  id: "5f446f2e138a3841f7aeccf2",
                  returned: true,
                },
                {
                  id: "5f446f2e136866e4fe60c893",
                  returned: true,
                },
                {
                  id: "5f446f2ede05a0b1e3394d8b",
                  returned: true,
                },
                {
                  id: "5f446f2e1ad91e9aaa88b80c",
                  returned: true,
                },
                {
                  id: "5f446f2e91a138c3a8ac6980",
                  returned: true,
                },
                {
                  id: "5f446f2e4081699cdc6a2735",
                  returned: true,
                },
                {
                  id: "5f446f2e0b3e2ff72fc503e7",
                  returned: true,
                },
                {
                  id: "5f446f2e7b9cd304fed3a8bc",
                  returned: true,
                },
                {
                  id: "5f446f2ea508b6a99c3e42c6",
                  returned: true,
                },
                {
                  id: "5f446f2e73359bee0fec4ba9",
                  returned: true,
                },
                {
                  id: "5f446f2e1c71888e2233621e",
                  returned: true,
                },
                {
                  id: "5f446f2eed18105706d6ca19",
                  returned: true,
                },
                {
                  id: "5f446f2ed9aac23c0340aab2",
                  returned: true,
                },
                {
                  id: "5f446f2e93963fcd4e5adf00",
                  returned: true,
                },
                {
                  id: "5f446f2e7d3e00a5efe35b6e",
                  returned: true,
                },
                {
                  id: "5f446f2efa2e5110917e5929",
                  returned: true,
                },
                {
                  id: "5f446f2ebe8314bcec531cc5",
                  returned: true,
                },
                {
                  id: "5f446f2e91a138c3a8ac6980",
                  returned: true,
                },
                {
                  id: "5f446f2e07ed0822aa926d16",
                  returned: true,
                },
              ],
            },
            //borrowed 13x
            {
              id: "5f44713285313723dc44e96b",
              title: "adipisicing irure excepteur",
              genre: "Music",
              authorId: 39,
              borrows: [
                {
                  id: "5f446f2e22469f38e4455c73",
                  returned: false,
                },
                {
                  id: "5f446f2e4081699cdc6a2735",
                  returned: true,
                },
                {
                  id: "5f446f2efa7fe184c4014dd2",
                  returned: true,
                },
                {
                  id: "5f446f2edc76a41729492d41",
                  returned: true,
                },
                {
                  id: "5f446f2ec32d71dabec35b06",
                  returned: true,
                },
                {
                  id: "5f446f2e1ad91e9aaa88b80c",
                  returned: true,
                },
                {
                  id: "5f446f2e4eff1030e7316861",
                  returned: true,
                },
                {
                  id: "5f446f2e0cb6abe0576cf60d",
                  returned: true,
                },
                {
                  id: "5f446f2e3e70bb4e1ab821c9",
                  returned: true,
                },
                {
                  id: "5f446f2eae901a82e0259947",
                  returned: true,
                },
                {
                  id: "5f446f2e189628dfd4e6225e",
                  returned: true,
                },
                {
                  id: "5f446f2ebe8314bcec531cc5",
                  returned: true,
                },
                {
                  id: "5f446f2eeb9463f976413b65",
                  returned: true,
                },
              ],
            },
            //borrowed 24x
            {
              id: "5f4471320dd80f42b780c29e",
              title: "fugiat laborum officia ea aute",
              genre: "Travel",
              authorId: 9,
              borrows: [
                {
                  id: "5f446f2e5aa2bb5545a0f8a6",
                  returned: false,
                },
                {
                  id: "5f446f2e22469f38e4455c73",
                  returned: true,
                },
                {
                  id: "5f446f2e2cfa3e1d234679b9",
                  returned: true,
                },
                {
                  id: "5f446f2ef7fc711c78b57e51",
                  returned: true,
                },
                {
                  id: "5f446f2ea508b6a99c3e42c6",
                  returned: true,
                },
                {
                  id: "5f446f2ee1661e64cde14e55",
                  returned: true,
                },
                {
                  id: "5f446f2e0b3e2ff72fc503e7",
                  returned: true,
                },
                {
                  id: "5f446f2ee734f727dfceefbd",
                  returned: true,
                },
                {
                  id: "5f446f2e1ad91e9aaa88b80c",
                  returned: true,
                },
                {
                  id: "5f446f2e138a3841f7aeccf2",
                  returned: true,
                },
                {
                  id: "5f446f2eeb9463f976413b65",
                  returned: true,
                },
                {
                  id: "5f446f2e9487cb7bf46726b5",
                  returned: true,
                },
                {
                  id: "5f446f2e0cb6abe0576cf60d",
                  returned: true,
                },
                {
                  id: "5f446f2e0f8e52a3ee861543",
                  returned: true,
                },
                {
                  id: "5f446f2e3900dfec59489477",
                  returned: true,
                },
                {
                  id: "5f446f2ee176f80b8d5d24da",
                  returned: true,
                },
                {
                  id: "5f446f2e91c2af00cb74e82b",
                  returned: true,
                },
                {
                  id: "5f446f2e2a4fcd687493a775",
                  returned: true,
                },
                {
                  id: "5f446f2ea6b68cf6f85f6e28",
                  returned: true,
                },
                {
                  id: "5f446f2e637138095dcc3db2",
                  returned: true,
                },
                {
                  id: "5f446f2e0f8e52a3ee861543",
                  returned: true,
                },
                {
                  id: "5f446f2e7eb4accbc92cb7a8",
                  returned: true,
                },
                {
                  id: "5f446f2e0f8e52a3ee861543",
                  returned: true,
                },
                {
                  id: "5f446f2e0f8e52a3ee861543",
                  returned: true,
                },
              ],
            },
            //borrowed 4x
            {
                id: "5f4471321db144e328b8a6e0",
                title: "culpa est do mollit ut",
                genre: "Young Adult",
                authorId: 25,
                borrows: [
                  {
                    id: "5f446f2ed46724f41c9fc431",
                    returned: false,
                  },
                  {
                    id: "5f446f2ea6b68cf6f85f6e28",
                    returned: true,
                  },
                  {
                    id: "5f446f2e2cfa3e1d234679b9",
                    returned: true,
                  },
                  {
                    id: "5f446f2e91a138c3a8ac6980",
                    returned: true,
                  },
                ],
            },
          ];
      const actual = getMostPopularBooks(books);
      const [first,second] = getMostPopularBooks(books);
   expect(first.name).to.eql("sit eiusmod occaecat eu magna")
   expect(first.count).to.eql(25)
   expect(second.name).to.eql("fugiat laborum officia ea aute"); 
   expect(second.count).to.eql(24)
   expect(actual.length).to.equal(5);
    });
  });

//function test get most popular authors
describe("getMostPopularAuthors", () => {
    it("should return an array containing 5 ranked objects { author & borrows count }", () => {
        //sample size includes 8 books & 6 authors
        //books sample with their borrow counts & author id shown comments above each object below
        //author sample has total borrow counts shown in comments 
        //result array should be sorted by borrows # & limited to 5 objects so author 6 should be excluded
        const books = [
            //author 1 borrowed 25x
            {
              id: "5f447132d487bd81da01e25e",
              title: "sit eiusmod occaecat eu magna",
              genre: "Fiction",
              authorId: 1,
              borrows: [
                {
                  id: "5f446f2e2cfa3e1d234679b9",
                  returned: false,
                },
                {
                  id: "5f446f2ed3609b719568a415",
                  returned: true,
                },
                {
                  id: "5f446f2e1c71888e2233621e",
                  returned: true,
                },
                {
                  id: "5f446f2e6059326d9feb9a68",
                  returned: true,
                },
                {
                  id: "5f446f2ede05a0b1e3394d8b",
                  returned: true,
                },
                {
                  id: "5f446f2e4081699cdc6a2735",
                  returned: true,
                },
                {
                  id: "5f446f2e3900dfec59489477",
                  returned: true,
                },
                {
                  id: "5f446f2e6059326d9feb9a68",
                  returned: true,
                },
                {
                  id: "5f446f2e409f8883af2955dd",
                  returned: true,
                },
                {
                  id: "5f446f2e3900dfec59489477",
                  returned: true,
                },
                {
                  id: "5f446f2eae901a82e0259947",
                  returned: true,
                },
                {
                  id: "5f446f2ef2ab5f5a9f60c4f2",
                  returned: true,
                },
                {
                  id: "5f446f2ea6b68cf6f85f6e28",
                  returned: true,
                },
                {
                  id: "5f446f2eed18105706d6ca19",
                  returned: true,
                },
                {
                  id: "5f446f2eae901a82e0259947",
                  returned: true,
                },
                {
                  id: "5f446f2e91c2af00cb74e82b",
                  returned: true,
                },
                {
                  id: "5f446f2e5aa2bb5545a0f8a6",
                  returned: true,
                },
                {
                  id: "5f446f2ea508b6a99c3e42c6",
                  returned: true,
                },
                {
                  id: "5f446f2e50cc2da9cd80efdb",
                  returned: true,
                },
                {
                  id: "5f446f2e0b3e2ff72fc503e7",
                  returned: true,
                },
                {
                  id: "5f446f2e91c2af00cb74e82b",
                  returned: true,
                },
                {
                  id: "5f446f2ef795e593cd3cd19d",
                  returned: true,
                },
                {
                  id: "5f446f2e2f35653fa80bf490",
                  returned: true,
                },
                {
                  id: "5f446f2e7b9cd304fed3a8bc",
                  returned: true,
                },
                {
                  id: "5f446f2ed9aac23c0340aab2",
                  returned: true,
                },
              ],
            },
            //author 3 borrowed 14x
            {
              id: "5f4471329627160be1e8ce92",
              title: "esse ea veniam non occaecat",
              genre: "Fiction",
              authorId: 3,
              borrows: [
                {
                  id: "5f446f2ed3609b719568a415",
                  returned: false,
                },
                {
                  id: "5f446f2ec32d71dabec35b06",
                  returned: true,
                },
                {
                  id: "5f446f2ef2ab5f5a9f60c4f2",
                  returned: true,
                },
                {
                  id: "5f446f2e7a1be21e362b82f9",
                  returned: true,
                },
                {
                  id: "5f446f2e6059326d9feb9a68",
                  returned: true,
                },
                {
                  id: "5f446f2ec32d71dabec35b06",
                  returned: true,
                },
                {
                  id: "5f446f2e59f9380a1d03d766",
                  returned: true,
                },
                {
                  id: "5f446f2e141b97d842b680fd",
                  returned: true,
                },
                {
                  id: "5f446f2e409f8883af2955dd",
                  returned: true,
                },
                {
                  id: "5f446f2ee176f80b8d5d24da",
                  returned: true,
                },
                {
                  id: "5f446f2ef795e593cd3cd19d",
                  returned: true,
                },
                {
                  id: "5f446f2eef419207c5fa4ec9",
                  returned: true,
                },
                {
                  id: "5f446f2e50cc2da9cd80efdb",
                  returned: true,
                },
                {
                  id: "5f446f2e4081699cdc6a2735",
                  returned: true,
                },
              ],
            },
            //author 2 borrowed 9x
            {
              id: "5f44713265e5d8d17789beb0",
              title: "tempor occaecat fugiat",
              genre: "Fiction",
              authorId: 2,
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
            //author 2 borrowed 22x
            {
              id: "5f447132ee5532b325d575ac",
              title: "commodo ut ipsum",
              genre: "Young Adult",
              authorId: 2,
              borrows: [
                {
                  id: "5f446f2e5e2952040e9f9b88",
                  returned: false,
                },
                {
                  id: "5f446f2e0cb6abe0576cf60d",
                  returned: true,
                },
                {
                  id: "5f446f2e2cfa3e1d234679b9",
                  returned: true,
                },
                {
                  id: "5f446f2e138a3841f7aeccf2",
                  returned: true,
                },
                {
                  id: "5f446f2e136866e4fe60c893",
                  returned: true,
                },
                {
                  id: "5f446f2ede05a0b1e3394d8b",
                  returned: true,
                },
                {
                  id: "5f446f2e1ad91e9aaa88b80c",
                  returned: true,
                },
                {
                  id: "5f446f2e91a138c3a8ac6980",
                  returned: true,
                },
                {
                  id: "5f446f2e4081699cdc6a2735",
                  returned: true,
                },
                {
                  id: "5f446f2e0b3e2ff72fc503e7",
                  returned: true,
                },
                {
                  id: "5f446f2e7b9cd304fed3a8bc",
                  returned: true,
                },
                {
                  id: "5f446f2ea508b6a99c3e42c6",
                  returned: true,
                },
                {
                  id: "5f446f2e73359bee0fec4ba9",
                  returned: true,
                },
                {
                  id: "5f446f2e1c71888e2233621e",
                  returned: true,
                },
                {
                  id: "5f446f2eed18105706d6ca19",
                  returned: true,
                },
                {
                  id: "5f446f2ed9aac23c0340aab2",
                  returned: true,
                },
                {
                  id: "5f446f2e93963fcd4e5adf00",
                  returned: true,
                },
                {
                  id: "5f446f2e7d3e00a5efe35b6e",
                  returned: true,
                },
                {
                  id: "5f446f2efa2e5110917e5929",
                  returned: true,
                },
                {
                  id: "5f446f2ebe8314bcec531cc5",
                  returned: true,
                },
                {
                  id: "5f446f2e91a138c3a8ac6980",
                  returned: true,
                },
                {
                  id: "5f446f2e07ed0822aa926d16",
                  returned: true,
                },
              ],
            },
            //author 4 borrowed 13x
            {
              id: "5f44713285313723dc44e96b",
              title: "adipisicing irure excepteur",
              genre: "Music",
              authorId: 4,
              borrows: [
                {
                  id: "5f446f2e22469f38e4455c73",
                  returned: false,
                },
                {
                  id: "5f446f2e4081699cdc6a2735",
                  returned: true,
                },
                {
                  id: "5f446f2efa7fe184c4014dd2",
                  returned: true,
                },
                {
                  id: "5f446f2edc76a41729492d41",
                  returned: true,
                },
                {
                  id: "5f446f2ec32d71dabec35b06",
                  returned: true,
                },
                {
                  id: "5f446f2e1ad91e9aaa88b80c",
                  returned: true,
                },
                {
                  id: "5f446f2e4eff1030e7316861",
                  returned: true,
                },
                {
                  id: "5f446f2e0cb6abe0576cf60d",
                  returned: true,
                },
                {
                  id: "5f446f2e3e70bb4e1ab821c9",
                  returned: true,
                },
                {
                  id: "5f446f2eae901a82e0259947",
                  returned: true,
                },
                {
                  id: "5f446f2e189628dfd4e6225e",
                  returned: true,
                },
                {
                  id: "5f446f2ebe8314bcec531cc5",
                  returned: true,
                },
                {
                  id: "5f446f2eeb9463f976413b65",
                  returned: true,
                },
              ],
            },
            // author 5 borrowed 24x
            {
              id: "5f4471320dd80f42b780c29e",
              title: "fugiat laborum officia ea aute",
              genre: "Travel",
              authorId: 5,
              borrows: [
                {
                  id: "5f446f2e5aa2bb5545a0f8a6",
                  returned: false,
                },
                {
                  id: "5f446f2e22469f38e4455c73",
                  returned: true,
                },
                {
                  id: "5f446f2e2cfa3e1d234679b9",
                  returned: true,
                },
                {
                  id: "5f446f2ef7fc711c78b57e51",
                  returned: true,
                },
                {
                  id: "5f446f2ea508b6a99c3e42c6",
                  returned: true,
                },
                {
                  id: "5f446f2ee1661e64cde14e55",
                  returned: true,
                },
                {
                  id: "5f446f2e0b3e2ff72fc503e7",
                  returned: true,
                },
                {
                  id: "5f446f2ee734f727dfceefbd",
                  returned: true,
                },
                {
                  id: "5f446f2e1ad91e9aaa88b80c",
                  returned: true,
                },
                {
                  id: "5f446f2e138a3841f7aeccf2",
                  returned: true,
                },
                {
                  id: "5f446f2eeb9463f976413b65",
                  returned: true,
                },
                {
                  id: "5f446f2e9487cb7bf46726b5",
                  returned: true,
                },
                {
                  id: "5f446f2e0cb6abe0576cf60d",
                  returned: true,
                },
                {
                  id: "5f446f2e0f8e52a3ee861543",
                  returned: true,
                },
                {
                  id: "5f446f2e3900dfec59489477",
                  returned: true,
                },
                {
                  id: "5f446f2ee176f80b8d5d24da",
                  returned: true,
                },
                {
                  id: "5f446f2e91c2af00cb74e82b",
                  returned: true,
                },
                {
                  id: "5f446f2e2a4fcd687493a775",
                  returned: true,
                },
                {
                  id: "5f446f2ea6b68cf6f85f6e28",
                  returned: true,
                },
                {
                  id: "5f446f2e637138095dcc3db2",
                  returned: true,
                },
                {
                  id: "5f446f2e0f8e52a3ee861543",
                  returned: true,
                },
                {
                  id: "5f446f2e7eb4accbc92cb7a8",
                  returned: true,
                },
                {
                  id: "5f446f2e0f8e52a3ee861543",
                  returned: true,
                },
                {
                  id: "5f446f2e0f8e52a3ee861543",
                  returned: true,
                },
              ],
            },
            //author 5 borrowed 4x
            {
                id: "5f4471321db144e328b8a6e0",
                title: "culpa est do mollit ut",
                genre: "Young Adult",
                authorId: 5,
                borrows: [
                  {
                    id: "5f446f2ed46724f41c9fc431",
                    returned: false,
                  },
                  {
                    id: "5f446f2ea6b68cf6f85f6e28",
                    returned: true,
                  },
                  {
                    id: "5f446f2e2cfa3e1d234679b9",
                    returned: true,
                  },
                  {
                    id: "5f446f2e91a138c3a8ac6980",
                    returned: true,
                  },
                ],
            },
            //author 6 borrows 2x
            {
                id: "5f4471327b4fc27678e1410e",
                title: "labore sit eu",
                genre: "Fiction",
                authorId: 6,
                borrows: [
                  {
                    id: "5f446f2e7d3e00a5efe35b6e",
                    returned: true,
                  },
                  {
                    id: "5f446f2edc76a41729492d41",
                    returned: true,
                  },
                ],
            },    
          ];
          
          const authors = [
            //total 25 borrows
          {
            id: 1,
            name: {
              first: "Trisha",
              last: "Mathis",
            },
          },
          //total 31 borrows
          {
            id: 2,
            name: {
              first: "Arnold",
              last: "Marks",
            },
          },
          //total 14 borrows
          {
            id: 3,
            name: {
              first: "Faye",
              last: "Arnold",
            },
          },
          //total 13 borrows
          {
            id: 4,
            name: {
              first: "Tami",
              last: "Hurst",
            },
          },
          //total 28 borrows
          {
            id: 5,
            name: {
              first: "Farmer",
              last: "Stevenson",
            },
          },
          //total 2 borrows (least) should be excluded form list
          {
            id: 6,
            name: {
              first: "Hancock",
              last: "Fuller",
            },
          },  
          ]
      const actual = getMostPopularAuthors(books, authors);
      const [first,second] = getMostPopularAuthors(books,authors);
   expect(first.name).to.eql("Arnold Marks")
   expect(first.count).to.eql(31)
   expect(second.name).to.eql("Farmer Stevenson"); 
   expect(second.count).to.eql(28)
   expect(actual.length).to.equal(5);
    });
  });



  //funciton test ranking (my helper function)
  describe("ranking", () => {
    it("should return an array containing 5 sorted objects", () => {
        //this sample data includes 6 genres so the ranking funciton should sort them & slice
        //the array to only include 5 objects, we will use the help of the getMostCommonGenres
        //funciton that way we have an input for lists parameter
        //we can prove it sorts if young adult (the only genre with a count of 2)
        //is the first object
        const books = [
            //fiction 1
            {
              id: "5f447132d487bd81da01e25e",
              title: "sit eiusmod occaecat eu magna",
              genre: "Fiction",
              authorId: 8,
              borrows: [
                {
                  id: "5f446f2e2cfa3e1d234679b9",
                  returned: false,
                },
                {
                  id: "5f446f2ed3609b719568a415",
                  returned: true,
                },
                {
                  id: "5f446f2e1c71888e2233621e",
                  returned: true,
                },
                {
                  id: "5f446f2e6059326d9feb9a68",
                  returned: true,
                },
                {
                  id: "5f446f2ede05a0b1e3394d8b",
                  returned: true,
                },
                {
                  id: "5f446f2e4081699cdc6a2735",
                  returned: true,
                },
                {
                  id: "5f446f2e3900dfec59489477",
                  returned: true,
                },
                {
                  id: "5f446f2e6059326d9feb9a68",
                  returned: true,
                },
                {
                  id: "5f446f2e409f8883af2955dd",
                  returned: true,
                },
                {
                  id: "5f446f2e3900dfec59489477",
                  returned: true,
                },
                {
                  id: "5f446f2eae901a82e0259947",
                  returned: true,
                },
                {
                  id: "5f446f2ef2ab5f5a9f60c4f2",
                  returned: true,
                },
                {
                  id: "5f446f2ea6b68cf6f85f6e28",
                  returned: true,
                },
                {
                  id: "5f446f2eed18105706d6ca19",
                  returned: true,
                },
                {
                  id: "5f446f2eae901a82e0259947",
                  returned: true,
                },
                {
                  id: "5f446f2e91c2af00cb74e82b",
                  returned: true,
                },
                {
                  id: "5f446f2e5aa2bb5545a0f8a6",
                  returned: true,
                },
                {
                  id: "5f446f2ea508b6a99c3e42c6",
                  returned: true,
                },
                {
                  id: "5f446f2e50cc2da9cd80efdb",
                  returned: true,
                },
                {
                  id: "5f446f2e0b3e2ff72fc503e7",
                  returned: true,
                },
                {
                  id: "5f446f2e91c2af00cb74e82b",
                  returned: true,
                },
                {
                  id: "5f446f2ef795e593cd3cd19d",
                  returned: true,
                },
                {
                  id: "5f446f2e2f35653fa80bf490",
                  returned: true,
                },
                {
                  id: "5f446f2e7b9cd304fed3a8bc",
                  returned: true,
                },
                {
                  id: "5f446f2ed9aac23c0340aab2",
                  returned: true,
                },
              ],
            },
            //young adult 1
            {
              id: "5f447132ee5532b325d575ac",
              title: "commodo ut ipsum",
              genre: "Young Adult",
              authorId: 31,
              borrows: [
                {
                  id: "5f446f2e5e2952040e9f9b88",
                  returned: false,
                },
                {
                  id: "5f446f2e0cb6abe0576cf60d",
                  returned: true,
                },
                {
                  id: "5f446f2e2cfa3e1d234679b9",
                  returned: true,
                },
                {
                  id: "5f446f2e138a3841f7aeccf2",
                  returned: true,
                },
                {
                  id: "5f446f2e136866e4fe60c893",
                  returned: true,
                },
                {
                  id: "5f446f2ede05a0b1e3394d8b",
                  returned: true,
                },
                {
                  id: "5f446f2e1ad91e9aaa88b80c",
                  returned: true,
                },
                {
                  id: "5f446f2e91a138c3a8ac6980",
                  returned: true,
                },
                {
                  id: "5f446f2e4081699cdc6a2735",
                  returned: true,
                },
                {
                  id: "5f446f2e0b3e2ff72fc503e7",
                  returned: true,
                },
                {
                  id: "5f446f2e7b9cd304fed3a8bc",
                  returned: true,
                },
                {
                  id: "5f446f2ea508b6a99c3e42c6",
                  returned: true,
                },
                {
                  id: "5f446f2e73359bee0fec4ba9",
                  returned: true,
                },
                {
                  id: "5f446f2e1c71888e2233621e",
                  returned: true,
                },
                {
                  id: "5f446f2eed18105706d6ca19",
                  returned: true,
                },
                {
                  id: "5f446f2ed9aac23c0340aab2",
                  returned: true,
                },
                {
                  id: "5f446f2e93963fcd4e5adf00",
                  returned: true,
                },
                {
                  id: "5f446f2e7d3e00a5efe35b6e",
                  returned: true,
                },
                {
                  id: "5f446f2efa2e5110917e5929",
                  returned: true,
                },
                {
                  id: "5f446f2ebe8314bcec531cc5",
                  returned: true,
                },
                {
                  id: "5f446f2e91a138c3a8ac6980",
                  returned: true,
                },
                {
                  id: "5f446f2e07ed0822aa926d16",
                  returned: true,
                },
              ],
            },
            //Music 1
            {
              id: "5f44713285313723dc44e96b",
              title: "adipisicing irure excepteur",
              genre: "Music",
              authorId: 39,
              borrows: [
                {
                  id: "5f446f2e22469f38e4455c73",
                  returned: false,
                },
                {
                  id: "5f446f2e4081699cdc6a2735",
                  returned: true,
                },
                {
                  id: "5f446f2efa7fe184c4014dd2",
                  returned: true,
                },
                {
                  id: "5f446f2edc76a41729492d41",
                  returned: true,
                },
                {
                  id: "5f446f2ec32d71dabec35b06",
                  returned: true,
                },
                {
                  id: "5f446f2e1ad91e9aaa88b80c",
                  returned: true,
                },
                {
                  id: "5f446f2e4eff1030e7316861",
                  returned: true,
                },
                {
                  id: "5f446f2e0cb6abe0576cf60d",
                  returned: true,
                },
                {
                  id: "5f446f2e3e70bb4e1ab821c9",
                  returned: true,
                },
                {
                  id: "5f446f2eae901a82e0259947",
                  returned: true,
                },
                {
                  id: "5f446f2e189628dfd4e6225e",
                  returned: true,
                },
                {
                  id: "5f446f2ebe8314bcec531cc5",
                  returned: true,
                },
                {
                  id: "5f446f2eeb9463f976413b65",
                  returned: true,
                },
              ],
            },
            //travel 1
            {
              id: "5f4471320dd80f42b780c29e",
              title: "fugiat laborum officia ea aute",
              genre: "Travel",
              authorId: 9,
              borrows: [
                {
                  id: "5f446f2e5aa2bb5545a0f8a6",
                  returned: false,
                },
                {
                  id: "5f446f2ede4d3317692340da",
                  returned: true,
                },
                {
                  id: "5f446f2e22469f38e4455c73",
                  returned: true,
                },
                {
                  id: "5f446f2e2cfa3e1d234679b9",
                  returned: true,
                },
                {
                  id: "5f446f2ef7fc711c78b57e51",
                  returned: true,
                },
                {
                  id: "5f446f2ea508b6a99c3e42c6",
                  returned: true,
                },
                {
                  id: "5f446f2ee1661e64cde14e55",
                  returned: true,
                },
                {
                  id: "5f446f2e0b3e2ff72fc503e7",
                  returned: true,
                },
                {
                  id: "5f446f2ee734f727dfceefbd",
                  returned: true,
                },
                {
                  id: "5f446f2e1ad91e9aaa88b80c",
                  returned: true,
                },
                {
                  id: "5f446f2e138a3841f7aeccf2",
                  returned: true,
                },
                {
                  id: "5f446f2eeb9463f976413b65",
                  returned: true,
                },
                {
                  id: "5f446f2e9487cb7bf46726b5",
                  returned: true,
                },
                {
                  id: "5f446f2e0cb6abe0576cf60d",
                  returned: true,
                },
                {
                  id: "5f446f2e0f8e52a3ee861543",
                  returned: true,
                },
                {
                  id: "5f446f2e3900dfec59489477",
                  returned: true,
                },
                {
                  id: "5f446f2ee176f80b8d5d24da",
                  returned: true,
                },
                {
                  id: "5f446f2e91c2af00cb74e82b",
                  returned: true,
                },
                {
                  id: "5f446f2e2a4fcd687493a775",
                  returned: true,
                },
                {
                  id: "5f446f2ea6b68cf6f85f6e28",
                  returned: true,
                },
                {
                  id: "5f446f2e637138095dcc3db2",
                  returned: true,
                },
                {
                  id: "5f446f2e0f8e52a3ee861543",
                  returned: true,
                },
                {
                  id: "5f446f2e7eb4accbc92cb7a8",
                  returned: true,
                },
                {
                  id: "5f446f2e0f8e52a3ee861543",
                  returned: true,
                },
                {
                  id: "5f446f2e0f8e52a3ee861543",
                  returned: true,
                },
              ],
            },
            //young adult 2
            {
                id: "5f4471321db144e328b8a6e0",
                title: "culpa est do mollit ut",
                genre: "Young Adult",
                authorId: 25,
                borrows: [
                  {
                    id: "5f446f2ed46724f41c9fc431",
                    returned: false,
                  },
                  {
                    id: "5f446f2ea6b68cf6f85f6e28",
                    returned: true,
                  },
                  {
                    id: "5f446f2e2cfa3e1d234679b9",
                    returned: true,
                  },
                  {
                    id: "5f446f2e91a138c3a8ac6980",
                    returned: true,
                  },
                ],
            },
            //classics 1
            {
                id: "5f447132b1cd3c79b1fd29b8",
                title: "incididunt nostrud minim",
                genre: "Classics",
                authorId: 4,
                borrows: [
                  {
                    id: "5f446f2e91c2af00cb74e82b",
                    returned: false,
                  },
                  {
                    id: "5f446f2ea508b6a99c3e42c6",
                    returned: true,
                  },
                  {
                    id: "5f446f2e2cfa3e1d234679b9",
                    returned: true,
                  },
                  {
                    id: "5f446f2ead0070f44676f2f6",
                    returned: true,
                  },
                  {
                    id: "5f446f2e59f9380a1d03d766",
                    returned: true,
                  },
                  {
                    id: "5f446f2e637138095dcc3db2",
                    returned: true,
                  },
                  {
                    id: "5f446f2e93963fcd4e5adf00",
                    returned: true,
                  },
                  {
                    id: "5f446f2e7eb4accbc92cb7a8",
                    returned: true,
                  },
                  {
                    id: "5f446f2e5e2952040e9f9b88",
                    returned: true,
                  },
                  {
                    id: "5f446f2ea0502bf8cbc7676a",
                    returned: true,
                  },
                  {
                    id: "5f446f2ee176f80b8d5d24da",
                    returned: true,
                  },
                  {
                    id: "5f446f2e365320cc6ed66535",
                    returned: true,
                  },
                  {
                    id: "5f446f2ee734f727dfceefbd",
                    returned: true,
                  },
                  {
                    id: "5f446f2e22469f38e4455c73",
                    returned: true,
                  },
                  {
                    id: "5f446f2e2cfa3e1d234679b9",
                    returned: true,
                  },
                  {
                    id: "5f446f2ede05a0b1e3394d8b",
                    returned: true,
                  },
                  {
                    id: "5f446f2ede4d3317692340da",
                    returned: true,
                  },
                  {
                    id: "5f446f2e141b97d842b680fd",
                    returned: true,
                  },
                  {
                    id: "5f446f2ee5be00208a4481e0",
                    returned: true,
                  },
                  {
                    id: "5f446f2e7b9cd304fed3a8bc",
                    returned: true,
                  },
                  {
                    id: "5f446f2eaf32d8ddf09e8f83",
                    returned: true,
                  },
                  {
                    id: "5f446f2e637138095dcc3db2",
                    returned: true,
                  },
                  {
                    id: "5f446f2ed3609b719568a415",
                    returned: true,
                  },
                  {
                    id: "5f446f2e7eb4accbc92cb7a8",
                    returned: true,
                  },
                  {
                    id: "5f446f2ef795e593cd3cd19d",
                    returned: true,
                  },
                  {
                    id: "5f446f2ea0502bf8cbc7676a",
                    returned: true,
                  },
                  {
                    id: "5f446f2ea0502bf8cbc7676a",
                    returned: true,
                  },
                  {
                    id: "5f446f2ef055e8f3064b763e",
                    returned: true,
                  },
                  {
                    id: "5f446f2e365320cc6ed66535",
                    returned: true,
                  },
                  {
                    id: "5f446f2ea2944b432d63f072",
                    returned: true,
                  },
                ],
            },
            //nonfiction 1
            {
                id: "5f447132c962d9fa6a3b613d",
                title: "cupidatat nisi laboris sint",
                genre: "Nonfiction",
                authorId: 1,
                borrows: [
                  {
                    id: "5f446f2e7a1be21e362b82f9",
                    returned: false,
                  },
                  {
                    id: "5f446f2e2f35653fa80bf490",
                    returned: true,
                  },
                  {
                    id: "5f446f2ecc5c4787c403f844",
                    returned: true,
                  },
                  {
                    id: "5f446f2e5aa2bb5545a0f8a6",
                    returned: true,
                  },
                  {
                    id: "5f446f2e7eb4accbc92cb7a8",
                    returned: true,
                  },
                  {
                    id: "5f446f2e73359bee0fec4ba9",
                    returned: true,
                  },
                  {
                    id: "5f446f2e5a23764338868b10",
                    returned: true,
                  },
                  {
                    id: "5f446f2e07ed0822aa926d16",
                    returned: true,
                  },
                  {
                    id: "5f446f2e0cb6abe0576cf60d",
                    returned: true,
                  },
                  {
                    id: "5f446f2e7a1be21e362b82f9",
                    returned: true,
                  },
                ],
            },
          ];
      const actual = getMostCommonGenres(books);
      const [first,second] = getMostCommonGenres(books);
   expect(first.name).to.eql("Young Adult")
   expect(first.count).to.eql(2)
   expect(second.count).to.eql(1); 
   expect(actual.length).to.equal(5);
    });
  });
