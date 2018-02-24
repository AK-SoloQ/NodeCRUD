var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Models
Genre = require('./model/genre');
Book = require('./model/book');

// Connection to Mongoose
mongoose.connect('mongodb://localhost/book');
var db = mongoose.connection;

//Express middelware
app.use(bodyParser.json());

// CRUD Configuration 
app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.get('/api/genres', function (req, res) {
    Genre.getGeners(function (err, genres) {
        if (err) {
            throw err;
        }
        res.json(genres)
    })
});

app.post('/api/genre', function (req, res) {
    var genre = req.body;
    Genre.addGeners(genre, function (err, genre) {
        if (err) {
            throw err;
        }
        res.json(genre)
    })
});

//Update Genre
app.put('/api/genre/:id', function (req, res) {
    var _id = req.params.id;
    var genre = req.body;
    Genre.updateGener(_id, genre, {}, function (err, genre) {
        if (err) {
            throw err;
        }
        res.json(genre);
    });

});

//delete Genre
app.delete('/api/genre/:id', function (req, res) {
    var _id = req.params.id;
    Genre.deleteGenere(_id, function (err, genre) {
        if (err) {
            throw err;
        }
        res.json(genre);
    });
});









app.get('/api/books', function (req, res) {
    Book.getBooks(function (err, books) {
        if (err) {
            throw err;
        }
        res.json(books)
    });
});

app.get('/api/book/:_id', function (req, res) {
    var _id = req.params.id;
    Book.getBookById(_id, function (err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    });
});

app.post('/api/book', function (req, res) {
    var book = req.body;
    Book.addBook(book, function (err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    });
});



app.get('*', function (req, res) {
    res.redirect('https://www.google.fr/')
});

app.listen(3000);
console.log('Running on port 3000....')