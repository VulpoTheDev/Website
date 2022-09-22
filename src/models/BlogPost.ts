import mongoose from 'mongoose'

const Schema = mongoose.Schema

const BlogPostSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now()
	},
	banner: {
		type: String,
		required: true
	},
	blogID: {
		type: String,
		required: true
	}
})

export default mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema)