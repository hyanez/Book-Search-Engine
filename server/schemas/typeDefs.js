const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int!
    savedBooks: [Book]
  }
  type Book {
    _id: ID!
    bookId: String!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }
  type Mutation {
    # login: Accepts an email and password as parameters; returns an Auth type.
    login(email: String!, password: String!): Auth
    # addUser: Accepts a username, email, and password as parameters; returns an Auth type.
    addUser(username: String!, email: String!, password: String!): Auth
    # saveBook: Accepts an input type with all parameters in saveBook, returns a User type.
    saveBook(input: saveBook!): User
    # removeBook: Accepts a book's bookId as a parameter; returns a User type.
    removeBook(bookId: ID!): User
  }
  # An input type that Accepts a book author's array, description, title, bookId, image, and link as parameters;
  input saveBook {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
  }
`;

module.exports = typeDefs;
