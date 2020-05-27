const { gql } = require("apollo-server-micro");

const typeDefs = gql`
    type Query {
        user(id: ID!): User
        users: [User]
    }

    type User {
        id: String
        fullname: String!
        email: String!
        password: String!
    }

    type Mutation {
        register(input: RegisterInput!): User!
    }

    input RegisterInput {
        fullname: String!
        email: String!
        password: String!
    }
`;

module.exports = typeDefs;