import mongoose from 'mongoose';

// Image Schema 
const ImageSchema = new mongoose.Schema({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  aspectRatio: { type: String, required: true }, 
  priority: { type: Boolean, default: false },
  caption: { type: String },
});

// Paragraph Schema 
const ParagraphSchema = new mongoose.Schema({
  content: { type: String, required: true },
});

// Section Schema 
const SectionSchema = new mongoose.Schema({
  heading: { type: String },
  images: [ImageSchema],
  paragraphs: [ParagraphSchema],
});

// Article Schema 
const ArticleSchema = new mongoose.Schema({
  sections: [SectionSchema], 
});

// Post Schema 
const PostSchema = new mongoose.Schema({
  metadata: {
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    createdAt: { type: Date, required: true },
    lastEditedAt: { type: Date, default: null },
  },
  article: ArticleSchema,
});

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);
export default Post;
