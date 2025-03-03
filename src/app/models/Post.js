import mongoose from "mongoose";

// Source Schema
const SourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  description: { type: String }
});

// Featured Image Schema
const FeaturedImageSchema = new mongoose.Schema({
  src: { type: String, required: true },
  alt: { type: String, required: true }
});

// Metadata Schema
const MetadataSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  summary: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  readingTime: { type: String, required: true },
  sources: { type: [SourceSchema], default: [] },
  featuredImage: { type: FeaturedImageSchema, required: true },
  createdAt: { type: Date, required: true }
});

// Content Schema (for text, lists, images, and headings)
const ContentSchema = new mongoose.Schema({
  type: { type: String, enum: ["heading", "paragraph", "list", "image"]},
  level: { type: Number, min: 1, max: 6 }, 
  text: { type: String }, 
  list: {
    items: [{ type: String }],
    ordered: { type: Boolean }
  }, 
  image: [{
    src: { type: String },
    alt: { type: String },
    aspectRatio: { type: String },
    caption: { type: String },
    priority: { type: Boolean }
  }] 
});

// Section Schema (each section contains ordered content)
const SectionSchema = new mongoose.Schema({
  content: [ContentSchema]
});

// Article Schema (holds all sections)
const ArticleSchema = new mongoose.Schema({
  sections: [SectionSchema]
});

// Post Schema (final document structure)
const PostSchema = new mongoose.Schema({
  metadata: MetadataSchema,
  article: ArticleSchema
});

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);
export default Post;


