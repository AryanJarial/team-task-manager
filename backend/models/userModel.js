import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a name'],
            trim: true 
        },
        email: {
            type: String,
            required: [true, 'Please provide an email address'],
            unique: true, 
            lowercase: true, 
            trim: true
        },
        password: {
            type: String,
            required: [true, 'Please provide a password'],
            minlength: 6 
        },
        role: {
            type: String,
            enum: ['Member', 'Admin'], 
            default: 'Member' 
        }
    },
    {
        timestamps: true 
    }
);

const User = mongoose.model('User', userSchema);

export default User;