const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();
const config = require("../config.js")

let users = [];

const isValid = (username) => { //returns boolean
  return users.filter((user) => user.username == username).length == 0
}

const authenticatedUser = (username, password) => { //returns boolean
  return users.filter((user) => user.username == username && user.password == password).length > 0
}

//only registered users can login
regd_users.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    if (authenticatedUser(username, password)) {
      let accessToken = jwt.sign({
        username
      }, config.JWT_SECRET, { expiresIn: 60 * 60 });
      req.session.authorization = {
        accessToken,
        username
      }
      return res.status(200).json({ message: "User successfully logged in" });
    } else {
      return res.status(401).json({ message: "Invalid Login. Check username and password" });
    }
  } else {
    return res.status(404).json({ message: "Data not received" });
  }
});

// Add a book review
// If it does not exist, it is created, if it already exists, it is updated.
regd_users.put("/auth/review/:isbn", (req, res) => {
  const isbn = req.params.isbn
  if (isbn) {
    const { review } = req.body
    if (review) {
      // const username = req.username
      const username = req.session.authorization['username'];
      let keys = Object.keys(books)
      for (var i = 0; i < keys.length; i++) {
        let book = books[keys[i]]
        if (isbn == book.isbn) {
          book.reviews[username] = review
          return res.status(200).json({ message: "Everything went well" });
        }
      }
    } else {
      return res.status(404).json({ message: "review not received" });
    }
  } else {
    return res.status(404).json({ message: "ISBN not received" });
  }
  return res.status(404).json({ message: "ISBN not found" });
});

// Delete a book review
regd_users.delete("/auth/review/:isbn", (req, res) => {
  const isbn = req.params.isbn
  if (isbn) {
    // const username = req.username
    const username = req.session.authorization['username'];
    let keys = Object.keys(books)
    for (var i = 0; i < keys.length; i++) {
      let book = books[keys[i]]
      if (isbn == book.isbn) {
        if (username in book.reviews){
          delete book.reviews[username]
        }
        return res.status(200).json({ message: "Everything went well" });
      }
    }
  } else {
    return res.status(404).json({ message: "ISBN not received" });
  }
  return res.status(404).json({ message: "ISBN not found" });
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
