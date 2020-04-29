const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        user(id: ID!): User
        users: [User]
    }

    type User {
        id: String
        fullname: String!
        age: Int!
        email: String!
    }

    type Mutation {
        register(input: RegisterInput!): User!
    }

    input RegisterInput {
        fullname: String!
        age: Int!
        email: String!
        password: String!
    }
`;

const users = [
    {
        id: "1234",
        fullname: "Prueba",
        age: 25,
        email: "prueba@prueba.com"
    },
];

const resolvers = {
    Query: {
        user: (_, args, context, info) => {
            console.log("QueryUser", { args });
            return users.find((x) => x.id === args.id);
        },
        users: () => users,
    },

    Mutation: {
        register: (_, { input }) => {
            console.log("Register", input);
            const user = { id: new Date(), ...input };
            users.push(user);
            return user;
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});