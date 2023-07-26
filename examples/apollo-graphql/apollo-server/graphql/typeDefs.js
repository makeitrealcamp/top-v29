const typeDefs = `#graphql
  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    "The Id of the book"
    _id: ID!

    "The title of the book"
    title: String!

    "The author of the book"
    author: String!

    "The date the book was created"
    createdAt: String

    "The date the book was last updated"
    updatedAt: String
  }

  type User {
    "The Id of the user"
    _id: ID!

    "The name of the user"
    name: String!

    "The username of the user"
    username: String!

    "The date the book was created"
    createdAt: String

    "The date the book was last updated"
    updatedAt: String
  }

  input CreateBookInput {
    title: String!
    author: String!
  }

  input CreateAccountInput {
    name: String!
    username: String!
    password: String!
  }

  type LogInPayload {
    user: User
    token: String!
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    "A simple type for getting started!"
    helloWorld: String
    "Fetches an array of books!"
    allBooks: [Book]
    singleBook(title: String author: String): Book
    getById(id: ID!): Book

    "Fetches an array of users!"
    allUsers: [User]
    "Fetches the total number of users!"
    totalUsers: Int!
    "Fetches the current user based on the JWT token!"
    me: User
  }

  type Mutation {
    "Add a new book to the database."
    addBook(input: CreateBookInput!): Book!

    "Add a new user to the database."
    createAccount(input: CreateAccountInput!): User!

    "Login a user to the database."
    login(username: String! password: String!): LogInPayload!
  }
`;

export default typeDefs;
