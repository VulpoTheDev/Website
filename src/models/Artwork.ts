import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ArtworkSchema = new Schema({
	artwork: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	dateCompleted: {
		type: Date,
		default: Date.now()
	},
	socials: {
		type: String,
		required: true
	},
	tags: {
		type: Array,
		required: true
	},
	artworkID: {
		type: String,
		required: true
	}
})

export default mongoose.models.Artwork || mongoose.model('Artwork', ArtworkSchema)