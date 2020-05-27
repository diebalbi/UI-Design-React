const { gql } = require("apollo-server-micro");

const typeDefs = gql`
    type Query {
        user(email: String!, password: String!): User
        users: [User]
        
        continents: [Continent]
        regions: [Region]
        region(id: ID!): Region

        place(id: ID!): Place
        places(continentId: ID!): [Place]
        activities(placeId: ID!): [Activity]
        images(placeId: ID!): [Image]
        reviewes(placeId: ID!): [Review]
    }

    type User {
        id: ID
        fullname: String!
        email: String!
        password: String!
    }

    type Continent {
        id: ID
        name: String!
    }
    
    type Region {
        id: ID
        name: String!
    }

    type Place {
        id: ID
        name: String!
        description: String!
        continentId: ID!
        regionId: ID
    }

    type Activity {
        id: ID
        placeId: String!
        name: String!
        price: Int!
    }

    type Image {
        id: ID
        placeId: String!
        url: String!
    }

    type Review {
        id: ID
        userId: ID!
        placeId: ID!
        rating: Int!
        description: String!
    }

    type Mutation {
        register(input: RegisterInput!): User!
        registerContinent(input: RegisterContinent!): Continent!
        registerRegion(input: RegisterRegion!): Region!
        registerPlace(input: RegisterPlace!): Place!
        registerActivity(input: RegisterActivity!): Activity!
        registerImage(input: RegisterImage!): Image!
        registerReview(input: RegisterReview!): Review!
    }

    input RegisterInput {
        fullname: String!
        email: String!
        password: String!
    }

    input RegisterContinent {
        name: String!
    }

    input RegisterRegion {
        name: String!
    }

    input RegisterPlace {
        name: String!
        description: String!
        continentId: ID!
        regionId: ID
    }

    input RegisterActivity {
        name: String!
        price: Int!
        placeId: ID!
    }

    input RegisterImage {
        url: String!
        placeId: ID!
    }

    input RegisterReview {
        userId: ID!
        placeId: ID!
        rating: Int!
        description: String!
    }
`;

module.exports = typeDefs;