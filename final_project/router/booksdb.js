/* 
- The 'isbn' did not exist and had to be created
- The 'reviews' was empty and had to be filled
*/

let books = {
      1: {
            "isbn": "978-93-5300-895-0",
            "author": "Chinua Achebe",
            "title": "Things Fall Apart",
            "reviews": {
                  "user1": "Good book", // <username>: "comment"
                  "user2": "Wonderful story" 
            }
      },
      2: {
            "isbn": "978-93-5300-895-1",
            "author": "Hans Christian Andersen",
            "title": "Fairy tales",
            "reviews": {}
      },
      3: {
            "isbn": "978-93-5300-895-2",
            "author": "Dante Alighieri",
            "title": "The Divine Comedy",
            "reviews": {}
      },
      4: {
            "isbn": "978-93-5300-895-3",
            "author": "Unknown",
            "title": "The Epic Of Gilgamesh",
            "reviews": {}
      },
      5: {
            "isbn": "978-93-5300-895-4",
            "author": "Unknown",
            "title": "The Book Of Job",
            "reviews": {}
      },
      6: {
            "isbn": "978-93-5300-895-5",
            "author": "Unknown",
            "title": "One Thousand and One Nights",
            "reviews": {}
      },
      7: {
            "isbn": "978-93-5300-895-6",
            "author": "Unknown",
            "title": "Nj\u00e1l's Saga",
            "reviews": {}
      },
      8: {
            "isbn": "978-93-5300-895-7",
            "author": "Jane Austen",
            "title": "Pride and Prejudice",
            "reviews": {}
      },
      9: {
            "isbn": "978-93-5300-895-8",
            "author": "Honor\u00e9 de Balzac",
            "title": "Le P\u00e8re Goriot",
            "reviews": {}
      },
      10: {
            "isbn": "978-93-5300-895-9",
            "author": "Samuel Beckett",
            "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
            "reviews": {}
      }
}

module.exports = books;
