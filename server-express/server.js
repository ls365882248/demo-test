const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    getMessage(id: ID!): [Message]
    getMessageList: [Message]
  }
  input MessageInput {
    content: String
    author: String
  }
  type Message {
    id: ID!
    content: String
    author: String
  }
  type Mutation {
    setMessage(message: String): String
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }
`);

class Message {
  constructor(id, { content, author }) {
    this.id = id;
    this.content = content;
    this.author = author;
  }
}

// The root provides a resolver function for each API endpoint
var fakeDatabase = {};
var root = {
  getMessage: ({ id }) => {
    if (!fakeDatabase[id]) {
      throw new Error('no message exists with id ' + id);
    }
    return [new Message(id, fakeDatabase[id])];
  },
  getMessageList: () => {
    let result = [];
    for (let id in fakeDatabase) {
      result.push(new Message(id, fakeDatabase[id]));
    }
    return result;
  },
  createMessage: ({ input }) => {
    // Create a random id for our "database".
    var id = require('crypto').randomBytes(10).toString('hex');

    fakeDatabase[id] = { ...input };
    return new Message(id, { ...input });
  },
  updateMessage: ({ id, input }) => {
    if (!fakeDatabase[id]) {
      throw new Error('no message exists with id ' + id);
    }
    // This replaces all old data, but some apps might want partial update.
    fakeDatabase[id] = input;
    return new Message(id, input);
  },
};

var app = express();
app.use('/graph', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4001);
console.log('Running a GraphQL API server at http://localhost:4000/graph');