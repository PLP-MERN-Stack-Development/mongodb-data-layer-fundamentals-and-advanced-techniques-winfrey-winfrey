# MongoDB Bookstore Project

# plp_bookstore

This project demonstrates how to insert and query book data in MongoDB using Node.js.

## Files

- **insert_books.js**  
  Script to connect to MongoDB and insert a collection of books.

- **queries.js**  
  Script containing different MongoDB queries to retrieve and manipulate book data.

- **README.md**  
  This file, explaining how to set up and run the project.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system
- [MongoDB](https://www.mongodb.com/) installed and running locally (or have access to a MongoDB Atlas cluster)
- `npm` (comes with Node.js)

## Setup Instructions

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```

# install required dependencies

npm install mongodb

# Update the MongoDB connection string inside the scripts (insert_books.js and queries.js) with your own:

const uri = "mongodb://localhost:27017"; // or your Atlas URI

# insert books

node insert_books.js

# run queries

node queries.js
