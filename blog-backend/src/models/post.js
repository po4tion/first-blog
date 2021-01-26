import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});

// 컬렉션 이름은 Post가 아닌 "posts"
const Post = mongoose.model('Post', PostSchema);

export default Post;
