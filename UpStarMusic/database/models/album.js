const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Properties of the Album object
const AlbumSchema = new Schema({
    title: String,
    date: Date,
    copiesSold: Number,
    numberTracks: Number,
    image: String,
    revenue: Number
});

// const Album = mongoose.model('album', AlbumSchema);
module.exports = AlbumSchema;