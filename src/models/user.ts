import User from '@src/type/repository/userDocument';
import UserModel from '@src/type/repository/userModel';
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema<User>({
    name: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    activated: {
        type: Boolean,
        required: true,
        default: false,
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    },
});

const User: UserModel = mongoose.model<User, UserModel>('User', UserSchema);
export default User;
