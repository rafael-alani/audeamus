import mongoose, { MongooseError } from "mongoose";

const movieSchema = mongoose.Schema({
  id: String,
  rank: Number,
  title: String,
  fullTitle: String,
  year: String,
  image: String,
  crew: String,
  imDbRating: Number,
  imDbRatingCount: Number,
});

const movieDetails = mongoose.model("movieDetails", movieSchema);

export default movieDetails;
