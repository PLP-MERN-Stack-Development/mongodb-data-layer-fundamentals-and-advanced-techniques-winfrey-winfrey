//Task 1
//creating the database plp_bookstore and the collection "books"

/*use plp_bookstore
switched to db plp_bookstore
db.createCollection("books")*/

//output
//{ ok: 1 }

//Task 2
//inserting 10 books into collection "books"
db.books.insertMany([
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: "J. B. Lippincott & Co.",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 10.99,
    in_stock: true,
    pages: 328,
    publisher: "Secker & Warburg",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: "Charles Scribner's Sons",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    published_year: 1932,
    price: 11.5,
    in_stock: false,
    pages: 311,
    publisher: "Chatto & Windus",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 14.99,
    in_stock: true,
    pages: 310,
    publisher: "George Allen & Unwin",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: "Little, Brown and Company",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    published_year: 1813,
    price: 7.99,
    in_stock: true,
    pages: 432,
    publisher: "T. Egerton, Whitehall",
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: "Allen & Unwin",
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    genre: "Political Satire",
    published_year: 1945,
    price: 8.5,
    in_stock: false,
    pages: 112,
    publisher: "Secker & Warburg",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: "HarperOne",
  },
]);

//output
/*{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('68dde9835163cb9433cebea4'),
    '1': ObjectId('68dde9835163cb9433cebea5'),
    '2': ObjectId('68dde9835163cb9433cebea6'),
    '3': ObjectId('68dde9835163cb9433cebea7'),
    '4': ObjectId('68dde9835163cb9433cebea8'),
    '5': ObjectId('68dde9835163cb9433cebea9'),
    '6': ObjectId('68dde9835163cb9433cebeaa'),
    '7': ObjectId('68dde9835163cb9433cebeab'),
    '8': ObjectId('68dde9835163cb9433cebeac'),
    '9': ObjectId('68dde9835163cb9433cebead')
  }
}*/
//finding all books in a specific genre (i chose Dystopian)
db.books.find({ genre: "Dystopian" });
//output
/*[
  {
    _id: ObjectId('68de07570071b4a23d4ee26b'),
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 10.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  },
  {
    _id: ObjectId('68de07570071b4a23d4ee26d'),
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    published_year: 1932,
    price: 11.5,
    in_stock: false,
    pages: 311,
    publisher: 'Chatto & Windus'
  }
]*/

//finding books published after a certain year(i used 1950)
db.books.find({ published_year: { $gt: 1950 } });

//output
/*[
  {
    _id: ObjectId('68de07570071b4a23d4ee26a'),
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  },
  {
    _id: ObjectId('68de07570071b4a23d4ee26f'),
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    _id: ObjectId('68de07570071b4a23d4ee271'),
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  },
  {
    _id: ObjectId('68de07570071b4a23d4ee273'),
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  }
]*/

//finding books by a specific author (i chose "George Orwell")
db.books.find({ author: "George Orwell" });

//output
/*[
  {
    _id: ObjectId('68de07570071b4a23d4ee26b'),
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 10.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  },
  {
    _id: ObjectId('68de07570071b4a23d4ee272'),
    title: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Political Satire',
    published_year: 1945,
    price: 8.5,
    in_stock: false,
    pages: 112,
    publisher: 'Secker & Warburg'
  }
] */

//updating the price of a specific book (i chose "1984")
db.books.updateOne({ title: "1984" }, { $set: { price: 20 } });

//output
/*{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
} */

//deleting one book
db.books.deleteOne({ title: "The Hobbit" });

//output
/* { acknowledged: true, deletedCount: 1 }*/

//TASK 3:ADVANCED QUERIES

//finding books in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 },
});

//Use projection to return only the title, author, and price fields in your queries
//using in_stock: true as a filter
db.books.find({ in_stock: true }, { title: 1, author: 1, price: 1, _id: 0 });

//result
/*[
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 12.99
  },
  { title: '1984', author: 'George Orwell', price: 20 },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 9.99
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    price: 8.99
  },
  { title: 'Pride and Prejudice', author: 'Jane Austen', price: 7.99 },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    price: 19.99
  },
  { title: 'The Alchemist', author: 'Paulo Coelho', price: 10.99 }
]*/

//sorting by ascending order
db.books.find().sort({ price: 1 });

//result
/*[
  {
    _id: ObjectId('68de07570071b4a23d4ee270'),
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    published_year: 1813,
    price: 7.99,
    in_stock: true,
    pages: 432,
    publisher: 'T. Egerton, Whitehall'
  },
  {
    _id: ObjectId('68de07570071b4a23d4ee272'),
    title: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Political Satire',
    published_year: 1945,
    price: 8.5,
    in_stock: false,
    pages: 112,
    publisher: 'Secker & Warburg'
  },
  {
    _id: ObjectId('68de07570071b4a23d4ee26f'),
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    _id: ObjectId('68de07570071b4a23d4ee26c'),
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: "Charles Scribner's Sons"
  },
  {
    _id: ObjectId('68de07570071b4a23d4ee273'),
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  },
  {
    _id: ObjectId('68de07570071b4a23d4ee26d'),
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    published_year: 1932,
    price: 11.5,
    in_stock: false,
    pages: 311,
    publisher: 'Chatto & Windus'
  },
  {
    _id: ObjectId('68de07570071b4a23d4ee26a'),
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  },
  {
    _id: ObjectId('68de07570071b4a23d4ee271'),
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  },
  {
    _id: ObjectId('68de07570071b4a23d4ee26b'),
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 20,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  }
] */

db.books.find().sort({ price: -1 });
/*[
  ({
    _id: ObjectId("68de07570071b4a23d4ee26b"),
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 20,
    in_stock: true,
    pages: 328,
    publisher: "Secker & Warburg",
  },
  {
    _id: ObjectId("68de07570071b4a23d4ee271"),
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: "Allen & Unwin",
  },
  {
    _id: ObjectId("68de07570071b4a23d4ee26a"),
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: "J. B. Lippincott & Co.",
  },
  {
    _id: ObjectId("68de07570071b4a23d4ee26d"),
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    published_year: 1932,
    price: 11.5,
    in_stock: false,
    pages: 311,
    publisher: "Chatto & Windus",
  },
  {
    _id: ObjectId("68de07570071b4a23d4ee273"),
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: "HarperOne",
  },
  {
    _id: ObjectId("68de07570071b4a23d4ee26c"),
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: "Charles Scribner's Sons",
  },
  {
    _id: ObjectId("68de07570071b4a23d4ee26f"),
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: "Little, Brown and Company",
  },
  {
    _id: ObjectId("68de07570071b4a23d4ee272"),
    title: "Animal Farm",
    author: "George Orwell",
    genre: "Political Satire",
    published_year: 1945,
    price: 8.5,
    in_stock: false,
    pages: 112,
    publisher: "Secker & Warburg",
  },
  {
    _id: ObjectId("68de07570071b4a23d4ee270"),
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    published_year: 1813,
    price: 7.99,
    in_stock: true,
    pages: 432,
    publisher: "T. Egerton, Whitehall",
  })
];*/

//limit and skip methods implementing pagination
//first page
db.books.find().limit(5);
//output

/*[
  {
    _id: ObjectId('68de07570071b4a23d4ee26a'),
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  },
  {
    _id: ObjectId('68de07570071b4a23d4ee26b'),
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 20,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  },
  {
    _id: ObjectId('68de07570071b4a23d4ee26c'),
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: "Charles Scribner's Sons"
  },
  {
    _id: ObjectId('68de07570071b4a23d4ee26d'),
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    published_year: 1932,
    price: 11.5,
    in_stock: false,
    pages: 311,
    publisher: 'Chatto & Windus'
  },
  {
    _id: ObjectId('68de07570071b4a23d4ee26f'),
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  }
]*/

//page 2
db.books.find().skip(5).limit(5);

//result
/*[
  {
    _id: ObjectId('68de07570071b4a23d4ee270'),
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    published_year: 1813,
    price: 7.99,
    in_stock: true,
    pages: 432,
    publisher: 'T. Egerton, Whitehall'
  },
  {
    _id: ObjectId('68de07570071b4a23d4ee271'),
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  },
  {
    _id: ObjectId('68de07570071b4a23d4ee272'),
    title: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Political Satire',
    published_year: 1945,
    price: 8.5,
    in_stock: false,
    pages: 112,
    publisher: 'Secker & Warburg'
  },
  {
    _id: ObjectId('68de07570071b4a23d4ee273'),
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  }
] */

//Aggregation pipeline
//calculating average price
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } },
]);
//result
/*[
  { _id: 'Dystopian', averagePrice: 15.75 },
  { _id: 'Fiction', averagePrice: 10.74 },
  { _id: 'Romance', averagePrice: 7.99 },
  { _id: 'Political Satire', averagePrice: 8.5 },
  { _id: 'Fantasy', averagePrice: 19.99 }
] */

//finding the author with the most books
db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 },
]);

//result
/*[ { _id: 'George Orwell', totalBooks: 2 } ] */

//grouping books by publication year
db.books.aggregate([
  {
    $project: {
      decade: {
        $concat: [
          {
            $toString: {
              $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10],
            },
          },
          "s",
        ],
      },
    },
  },
  {
    $group: {
      _id: "$decade",
      totalBooks: { $sum: 1 },
    },
  },
  {
    $sort: { _id: 1 },
  },
]);

/*[
  { _id: '1810s', totalBooks: 1 },
  { _id: '1920s', totalBooks: 1 },
  { _id: '1930s', totalBooks: 1 },
  { _id: '1940s', totalBooks: 2 },
  { _id: '1950s', totalBooks: 2 },
  { _id: '1960s', totalBooks: 1 },
  { _id: '1980s', totalBooks: 1 }
] */

//creating an index on the title field
db.books.createIndex({ title: 1 });
//result
// title_1;

//compound indexes on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

//result
//author_1_published_year_1

//performance improvement with indexes
//without indexes
db.books.find({ title: "The Great Gatsby" }).explain("executionStats");
//the result
/*{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'plp_bookstore.books',
    parsedQuery: { title: { '$eq': 'The Great Gatsby' } },
    indexFilterSet: false,
    queryHash: 'D85AB534',
    planCacheShapeHash: 'D85AB534',
    planCacheKey: '618E8600',
    optimizationTimeMillis: 0,
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    prunedSimilarIndexes: false,
    winningPlan: {
      isCached: false,
      stage: 'COLLSCAN',
      filter: { title: { '$eq': 'The Great Gatsby' } },
      direction: 'forward'
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 1,
    totalKeysExamined: 0,
    totalDocsExamined: 9,
    executionStages: {
      isCached: false,
      stage: 'COLLSCAN',
      filter: { title: { '$eq': 'The Great Gatsby' } },
      nReturned: 1,
      executionTimeMillisEstimate: 0,
      works: 10,
      advanced: 1,
      needTime: 8,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      direction: 'forward',
      docsExamined: 9
    }
  },
  queryShapeHash: 'B6C1D6F79AAA979584A9BA83C2F8D87C839BED87CAE10CD5F0AE5B89BCE86C6B',
  command: {
    find: 'books',
    filter: { title: 'The Great Gatsby' },
    '$db': 'plp_bookstore'
  },
  serverInfo: {
    host: 'DESKTOP-1HPDLCD',
    port: 27017,
    version: '8.2.0',
    gitVersion: '13e629eeccd63f00d17568fc4c12b7530fa34b54'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFrameworkControl: 'trySbeRestricted',
    internalQueryPlannerIgnoreIndexWithCollationForRegex: 1
  },
  ok: 1
} */

//with title index
db.books.find({ title: "The Great Gatsby" }).explain("executionStats");

//the result
/*{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'plp_bookstore.books',
    parsedQuery: { title: { '$eq': 'The Great Gatsby' } },
    indexFilterSet: false,
    queryHash: 'D85AB534',
    planCacheShapeHash: 'D85AB534',
    planCacheKey: 'E78EBB19',
    optimizationTimeMillis: 0,
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    prunedSimilarIndexes: false,
    winningPlan: {
      isCached: false,
      stage: 'FETCH',
      inputStage: {
        stage: 'IXSCAN',
        keyPattern: { title: 1 },
        indexName: 'title_1',
        isMultiKey: false,
        multiKeyPaths: { title: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { title: [ '["The Great Gatsby", "The Great Gatsby"]' ] }
      }
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 16,
    totalKeysExamined: 1,
    totalDocsExamined: 1,
    executionStages: {
      isCached: false,
      stage: 'FETCH',
      nReturned: 1,
      executionTimeMillisEstimate: 10,
      works: 2,
      advanced: 1,
      needTime: 0,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      docsExamined: 1,
      alreadyHasObj: 0,
      inputStage: {
        stage: 'IXSCAN',
        nReturned: 1,
        executionTimeMillisEstimate: 10,
        works: 2,
        advanced: 1,
        needTime: 0,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        keyPattern: { title: 1 },
        indexName: 'title_1',
        isMultiKey: false,
        multiKeyPaths: { title: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { title: [ '["The Great Gatsby", "The Great Gatsby"]' ] },
        keysExamined: 1,
        seeks: 1,
        dupsTested: 0,
        dupsDropped: 0
      }
    }
  },
  queryShapeHash: 'B6C1D6F79AAA979584A9BA83C2F8D87C839BED87CAE10CD5F0AE5B89BCE86C6B',
  command: {
    find: 'books',
    filter: { title: 'The Great Gatsby' },
    '$db': 'plp_bookstore'
  },
  serverInfo: {
    host: 'DESKTOP-1HPDLCD',
    port: 27017,
    version: '8.2.0',
    gitVersion: '13e629eeccd63f00d17568fc4c12b7530fa34b54'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFrameworkControl: 'trySbeRestricted',
    internalQueryPlannerIgnoreIndexWithCollationForRegex: 1
  },
  ok: 1
} */

//without compound index
db.books
  .find({ author: "George Orwell", published_year: 1949 })
  .explain("executionStats");

/*{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'plp_bookstore.books',
    parsedQuery: {
      '$and': [
        { author: { '$eq': 'George Orwell' } },
        { published_year: { '$eq': 1949 } }
      ]
    },
    indexFilterSet: false,
    queryHash: '6966734A',
    planCacheShapeHash: '6966734A',
    planCacheKey: '6138F07E',
    optimizationTimeMillis: 0,
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    prunedSimilarIndexes: false,
    winningPlan: {
      isCached: false,
      stage: 'COLLSCAN',
      filter: {
        '$and': [
          { author: { '$eq': 'George Orwell' } },
          { published_year: { '$eq': 1949 } }
        ]
      },
      direction: 'forward'
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 0,
    totalKeysExamined: 0,
    totalDocsExamined: 9,
    executionStages: {
      isCached: false,
      stage: 'COLLSCAN',
      filter: {
        '$and': [
          { author: { '$eq': 'George Orwell' } },
          { published_year: { '$eq': 1949 } }
        ]
      },
      nReturned: 1,
      executionTimeMillisEstimate: 0,
      works: 10,
      advanced: 1,
      needTime: 8,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      direction: 'forward',
      docsExamined: 9
    }
  },
  queryShapeHash: 'C723A03D914E8AB15A4F6B8E72C2E158CA114F3B9A50FE012146C9F2E0CF9962',
  command: {
    find: 'books',
    filter: { author: 'George Orwell', published_year: 1949 },
    '$db': 'plp_bookstore'
  },
  serverInfo: {
    host: 'DESKTOP-1HPDLCD',
    port: 27017,
    version: '8.2.0',
    gitVersion: '13e629eeccd63f00d17568fc4c12b7530fa34b54'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFrameworkControl: 'trySbeRestricted',
    internalQueryPlannerIgnoreIndexWithCollationForRegex: 1
  },
  ok: 1
} */

//with compound indexes
db.books
  .find({ author: "George Orwell", published_year: 1949 })
  .explain("executionStats");
//the result
/*{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'plp_bookstore.books',
    parsedQuery: {
      '$and': [
        { author: { '$eq': 'George Orwell' } },
        { published_year: { '$eq': 1949 } }
      ]
    },
    indexFilterSet: false,
    queryHash: '6966734A',
    planCacheShapeHash: '6966734A',
    planCacheKey: 'E7876701',
    optimizationTimeMillis: 4,
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    prunedSimilarIndexes: false,
    winningPlan: {
      isCached: false,
      stage: 'FETCH',
      inputStage: {
        stage: 'IXSCAN',
        keyPattern: { author: 1, published_year: 1 },
        indexName: 'author_1_published_year_1',
        isMultiKey: false,
        multiKeyPaths: { author: [], published_year: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: {
          author: [ '["George Orwell", "George Orwell"]' ],
          published_year: [ '[1949, 1949]' ]
        }
      }
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 5,
    totalKeysExamined: 1,
    totalDocsExamined: 1,
    executionStages: {
      isCached: false,
      stage: 'FETCH',
      nReturned: 1,
      executionTimeMillisEstimate: 0,
      works: 2,
      advanced: 1,
      needTime: 0,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      docsExamined: 1,
      alreadyHasObj: 0,
      inputStage: {
        stage: 'IXSCAN',
        nReturned: 1,
        executionTimeMillisEstimate: 0,
        works: 2,
        advanced: 1,
        needTime: 0,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        keyPattern: { author: 1, published_year: 1 },
        indexName: 'author_1_published_year_1',
        isMultiKey: false,
        multiKeyPaths: { author: [], published_year: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: {
          author: [ '["George Orwell", "George Orwell"]' ],
          published_year: [ '[1949, 1949]' ]
        },
        keysExamined: 1,
        seeks: 1,
        dupsTested: 0,
        dupsDropped: 0
      }
    }
  },
  queryShapeHash: 'C723A03D914E8AB15A4F6B8E72C2E158CA114F3B9A50FE012146C9F2E0CF9962',
  command: {
    find: 'books',
    filter: { author: 'George Orwell', published_year: 1949 },
    '$db': 'plp_bookstore'
  },
  serverInfo: {
    host: 'DESKTOP-1HPDLCD',
    port: 27017,
    version: '8.2.0',
    gitVersion: '13e629eeccd63f00d17568fc4c12b7530fa34b54'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFrameworkControl: 'trySbeRestricted',
    internalQueryPlannerIgnoreIndexWithCollationForRegex: 1
  },
  ok: 1
} */
