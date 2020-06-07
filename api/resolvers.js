const mongoose = require('mongoose');
const CONNECTION_STRING = process.env.CONNECTION_STRING || `mongodb+srv://dbAdmin:dbAdmin123@web-cluster-ito1a.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(CONNECTION_STRING, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const User = mongoose.model("User", {
    fullname: String,
    email: String,
    password: String
});

const Review = mongoose.model("Review", {
    userId: String,
    placeId: String,
    rating: String,
    description: String
});

const Place = mongoose.model("Place", {
    continentId: String,
    regionId: String,
    name: String,
    description: String,
    mainImageUrl: String
});

const Continent = mongoose.model("Continent", {
    name: String
});

const Region = mongoose.model("Region", {
    name: String
});

const Activity = mongoose.model("Activity", {
    placeId: String,
    name: String,
    price: String
});

const Image = mongoose.model("Image", {
    placeId: String,
    url: String
});

    
const resolvers = {
    Query: {
        user: (_, args) => {
            return User.findOne({ email: args.email, password: args.password});
        },
        placesByContinent: (_, args) => {
            return Place.find({ continentId: args.continentId });
        },
        placesByRegion: (_, args) => {
            return Place.find({ continentId: args.continentId });
        },
        place: (_, args) => {
            return Place.findById(args.id);
        },
        activities: (_, args) => {
            return Activity.find({ placeId: args.placeId });
        },
        images: (_, args) => {
            return Image.find({ placeId: args.placeId });
        },
        image: (_, args) => {
            return Image.findOne({ placeId: args.placeId });
        },
        region: (_, args, context, info) => {
            return Region.findById(args.id);
        },
        reviewes: (_, args, context, info) => {
            return Review.find({ placeId: args.placeId });
        },
        users: () => User.find(),
        continents: () => Continent.find(),
        regions: () => Region.find()
    },
    Mutation: {
        register: (_, { input }) => {
            const user = new User(input);
            return user.save();
        },
        registerContinent: (_, { input }) => {
            const continent = new Continent(input);
            return continent.save();
        },
        registerRegion: (_, { input }) => {
            const region = new Region(input);
            return region.save();
        },
        registerPlace: (_, { input }) => {
            const place = new Place(input);
            return place.save();
        },
        registerActivity: (_, { input }) => {
            const activity = new Activity(input);
            return activity.save();
        },
        registerImage: (_, { input }) => {
            const image = new Image(input);
            return image.save();
        },
        registerReview: (_, { input }) => {
            const review = new Review(input);
            return review.save();
        }
    }
};

module.exports = resolvers;
