## URL

Web: https://ui-design-react-823qjzp9m.now.sh

## Principales decisiones de diseño

Nos basamos en los estilos limpios y sencillos que encontramos en paginas del estilo como Airbnb, Booking y Qatar Airways pero también en otras paginas que nos resultaron agradables a la vista como mongodb y react, donde no utilizan muchos colores, sino que tienen generalmente 1 color principal y luego juegan con tonos de grises y el color blanco.

También lo que notamos en estas paginas de viajes, es que todas usan imagenes grandes o medianamente grades con poco texto, y toda la información te la brindan al ingresar en cada una de ellas por lo cual seguimos esa idea para el diseño de nuestro proyecto.

Por otro lado, decidimos no utilizar librerias que nos brindaran una Gallery la cual sería utilizada en el home sino que optamos por utilizar Cards y poder ajustarlo a lo que creemos ser una buena solución y fácil de extender si necesario.

## Instrucciones Web
- Clonar el repositorio 
- Correr comando `yarn install`
- Correr comando `yarn start`

### Para deployment en Versel

- Modificar web/apollo.js e indicar la nueva URL

## Instrucciones Mobile
Para utilizar la app mobile deberemos primero que nada pararnos en la carpeta app y correr npm install. Tambien tendremos que cambiar la uri para que apunte a nuestro IP local para poder correr la API, para ello hay que ir a App/client.js y en httpLink cambiar la url por su ip local. Una vez realizado esto deberemos correr por un lado now dev parados en la raiz del proyecto y por otro lado npm start o expo start parados en la carpeta de App. En caso de que nos aparezca un mensaje solicitando instalar expo-cli deberemos ingresar y una vez realizado estos pasos se nos abrira una web de expo en la cual tendremos varias opciones, una de ellas es usar la web pero donde no todas las funcionalidades sirven, otra opción es usar un emulador de android o ios y por ultimo tenemos la opcion de usar nuestro celular, para eso deberemos instalar la app de Expo y activar el modo desarrollador en el celular. Y ya podremos probar la app corriendo y ver sus funcionalidad. 

Para ingresar se puede utilizar el usuario: diegobalbi1993@gmail.com y contraseña: password

## Dependencias

### [Material UI](https://material-ui.com/)
- npm install @material-ui/core

### [styled-components](https://styled-components.com/)
- npm install --save styled-components

### [Formik](https://jaredpalmer.com/formik/)
- npm install formik --save

### [Yup](https://www.npmjs.com/package/yup)
- npm install -S yup

### [Mongoose](https://mongoosejs.com)
- npm install mongoose

### [GraphQL](https://graphql.org/)
- npm install --save graphql

## Prototype
[Prototype link](figma.com/file/PFDGyPfof3jsY7bt6dvu2h/Desarrollo-UI?node-id=0%3A1)
 
## Schema Graphql

```
const { gql } = require("apollo-server-micro");

const typeDefs = gql`
    type Query {
        user(id: ID!): User
        users: [User]
        
        trip(id: ID!): Trip
        trips(userId: ID!): [Trip]
        tripsPlaces(tripId: ID!): [TripPlace]

        continents: [Continent]
        regions: [Region]
        region(id: ID!): Region

        place(id: ID!): Place
        placesByContinent(continentId: ID!): [Place]
        placesByRegion(regionId: ID!): [Place]
        activities(placeId: ID!): [Activity]
        images(placeId: ID!): [Image]
        image(placeId: ID!): Image
        reviews(placeId: ID!): [Review]
    }

    type Trip {
        id: ID
        name: String!
        userId: ID!
        tripPlaces: [TripPlace]
    }

    type TripPlace {
        id: ID
        tripId: ID!
        placeId: ID!
        place: Place
    }

    type User {
        id: ID
        fullname: String!
        email: String!
        password: String!
        token: String
    }

    type Continent {
        id: ID
        name: String!
        places: [Place]
    }
    
    type Region {
        id: ID
        name: String!
        places: [Place]
    }

    type Place {
        id: ID
        name: String!
        description: String!
        mainImageUrl: String!
        continentId: ID!
        regionId: ID
        images: [Image]
        activities: [Activity]
        reviews: [Review]
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
        user: User
    }

    type LoginResponse {
        user: User
        ok: Boolean!
        error: String
    }

    type TripResponse {
        trip: Trip
        ok: Boolean!
        error: String
    }

    type TripPlaceResponse {
        tripPlace: TripPlace
        ok: Boolean!
        error: String
    }

    type Mutation {
        login(input: LoginInput!): LoginResponse
        register(input: RegisterInput!): User!
        registerContinent(input: RegisterContinent!): Continent!
        registerRegion(input: RegisterRegion!): Region!
        registerPlace(input: RegisterPlace!): Place!
        registerActivity(input: RegisterActivity!): Activity!
        registerImage(input: RegisterImage!): Image!
        registerReview(input: RegisterReview!): Review!
        registerTrip(input: RegisterTrip!): TripResponse!
        registerTripPlace(input: RegisterTripPlace!): TripPlaceResponse!
    }

    input RegisterTripPlace {
        tripId: ID!
        placeId: ID!
    }

    input RegisterTrip {
        name: String!
        userId: ID!
    }

    input LoginInput {
        email: String!
        password: String!
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
        mainImageUrl: String!
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
```
