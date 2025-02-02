import mongoose from 'mongoose';

// Image Schema
const ImageSchema = new mongoose.Schema({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  caption: { type: String },
});

// Paragraph Schema
const ParagraphSchema = new mongoose.Schema({
  content: { type: String, required: true },
  image: { type: ImageSchema, default: null },
});

// Section Schema
const SectionSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  images: [ImageSchema],
  paragraphs: [ParagraphSchema],
});

// Post Schema
const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  metadata: {
    author: { type: String, required: true },
    category: { type: String, required: true },
    tags: [{ type: String }],
    createdAt: { type: Date, required: true },
    lastEditedAt: { type: Date, default: null },
  },
  sections: [SectionSchema],
});

// **Pre-save Hook to Normalize and Lowercase Fields**
PostSchema.pre('save', function (next) {
  // Normalize & lowercase the author
  if (this.metadata.author) {
    this.metadata.author = this.metadata.author
      .toLowerCase() // Convert to lowercase
      .normalize('NFD') // Normalize Unicode characters
      .replace(/[\u0300-\u036f]/g, ''); // Remove diacritics (e.g., ö → o)
  }

  // Normalize & lowercase the category
  if (this.metadata.category) {
    this.metadata.category = this.metadata.category
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  // **Optional:** Normalize & lowercase each tag
  if (this.metadata.tags && Array.isArray(this.metadata.tags)) {
    this.metadata.tags = this.metadata.tags.map((tag) =>
      tag
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
    );
  }

  next();
});

// **Post Model Initialization**
const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);

export default Post;
