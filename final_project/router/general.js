const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req, res) => {
  const { username, password } = req.body
  if (username && password) {
    if (users.filter((user) => username == user.username).length == 0) {
      const newUser = {
        username,
        password
      }
      users.push(newUser)
      return res.status(200).json({ message: "User created" });
    } else {
      return res.status(400).json({ message: "User already exists" });
    }
  } else {
    return res.status(404).json({ message: "Data not received" });
  }
});

// Get the book list available in the shop
public_users.get('/', function (req, res) {
  let bookList = Object.keys(books).map((key) => books[key])
  return res.status(200).json({ bookList: bookList });
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn
  if (isbn) {
    let keys = Object.keys(books)
    for (var i = 0; i < keys.length; i++) {
      const book = books[keys[i]]
      if (isbn == book.isbn) {
        return res.status(200).json({ book: book });
      }
    }
  } else {
    return res.status(404).json({ message: "ISBN not received" });
  }
  return res.status(404).json({ message: "ISBN not found" });
});

// Get book details based on author
public_users.get('/author/:author', function (req, res) {
  const author = req.params.author
  if (author) {
    let keys = Object.keys(books)
    for (var i = 0; i < keys.length; i++) {
      const book = books[keys[i]]
      if (author == book.author) {
        return res.status(200).json({ book: book });
      }
    }
  } else {
    return res.status(404).json({ message: "author not received" });
  }
  return res.status(404).json({ message: "author not found" });
});

// Get all books based on title
public_users.get('/title/:title', function (req, res) {
  const title = req.params.title
  if (title) {
    let keys = Object.keys(books)
    for (var i = 0; i < keys.length; i++) {
      const book = books[keys[i]]
      if (title == book.title) {
        return res.status(200).json({ book: book });
      }
    }
  } else {
    return res.status(404).json({ message: "title not received" });
  }
  return res.status(404).json({ message: "title not found" });
});

//  Get book review
public_users.get('/review/:isbn', function (req, res) {
  const isbn = req.params.isbn
  if (isbn) {
    let keys = Object.keys(books)
    for (var i = 0; i < keys.length; i++) {
      const book = books[keys[i]]
      if (isbn == book.isbn) {
        const reviews = Object.keys(book.reviews).map((key) => book.reviews[key])
        return res.status(200).json({ reviews: reviews });
      }
    }
  } else {
    return res.status(404).json({ message: "isbn not received" });
  }
  return res.status(404).json({ message: "isbn not found" });
});

module.exports.general = public_users;
