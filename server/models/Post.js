const mongoose = require("mongoose");
const { Schema } = mongoose;
const commentSchema= new Schema ({
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    text: {
      type: String,
    },
    likes: {
      type:[]
    }, 
  })
const postSchema = new Schema({
  title: String,
  subTitle: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Admin",
  },
  body: {
    type: String,
  },
  rates: {
    type: [],
  },
  comments: [
      commentSchema
    ], 

  published: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  tags: [],
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
