const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: { type: String, default: "default-image" },
    url: {
      type: String,
      default:
        "https://img.freepik.com/free-vector/circle-arrow-icon-pink-sticker-repeat-symbol-vector_53876-143343.jpg",
      set: (v) =>
        v === ""
          ? "https://img.freepik.com/free-vector/circle-arrow-icon-pink-sticker-repeat-symbol-vector_53876-143343.jpg"
          : v,
    },
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner:{
    type: Schema.Types.ObjectId,
    ref:"User",
  },
  // category:{
  //   type:String,
  //   enum:["mountains", "arctic", "farms", ""]
  // }
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
