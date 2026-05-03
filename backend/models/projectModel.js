import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a project name'],
            trim: true
        },
        description: {
            type: String,
            required: [true, 'Please provide a project description']
        },
        members: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User' 
            }
        ],
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        timestamps: true 
    }
);

const Project = mongoose.model('Project', projectSchema);

export default Project;