import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide a task title'],
            trim: true
        },
        description: {
            type: String,
            required: [true, 'Please provide a task description']
        },
        status: {
            type: String,
            enum: ['To Do', 'In Progress', 'Completed'], 
            default: 'To Do' 
        },
        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', 
            required: [true, 'A task must be assigned to a user']
        },
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project', 
            required: [true, 'A task must belong to a project']
        },
        dueDate: {
            type: Date, 
            required: [true, 'Please provide a due date']
        }
    },
    {
        timestamps: true 
    }
);

const Task = mongoose.model('Task', taskSchema);

export default Task;