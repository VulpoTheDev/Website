import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ProjectSchema = new Schema({
	projectName: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now()
	},
	icon: {
		type: String,
		required: true
	},
	projectID: {
		type: String,
		required: true
	},
	github: {
		type: String,
		required: true
	},
	projectLink: {
		type: String,
		default: null
	},
	techStack: {
		type: Array,
		required: true

	}
})

export default mongoose.models.ProjectModel || mongoose.model('ProjectModel', ProjectSchema)