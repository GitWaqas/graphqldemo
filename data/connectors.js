import mongoose from 'mongoose';


// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://WaqasMongo:mongoPass00@ds247290.mlab.com:47290/friendsdb', {

});

const friendSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    language: {
        type: String
    },
    email: {
        type: String
    },
    contacts: {
        type: Array
    }
});

const Friends = mongoose.model('friends', friendSchema);


export { Friends};