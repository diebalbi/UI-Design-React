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

const resolvers = {
    Query: {
        user: (_, args, context, info) => {
            console.log("QueryUser", { args });
            return User.findById(args.id);
        },
        users: () => User.find(),
    },
    Mutation: {
        register: (_, { input }) => {
            const user = new User(input);
            return user.save();
        }
    }
};

module.exports = resolvers;
