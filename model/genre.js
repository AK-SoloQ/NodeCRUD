var mongoose = require('mongoose');

//Genre chema
var genreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

// Get Genres
module.exports.getGeners = function (callback, limit) {
    Genre.find(callback).limit(limit);
}

// Add Genres
module.exports.addGeners = function (genre, callback) {
    Genre.create(genre, callback);
}

// Update Genres 
module.exports.updateGener = function (id, genre, options, callback) {
    var query = {
        _id: id
    };
    var update = {
        name: genre.name
    };
    Genre.findOneAndUpdate(query, update, options, callback);
}

//delete Genres
module.exports.deleteGenere = function (id, callback) {
    var query = {
        _id: id
    };
    Genre.remove(query, callback);
}