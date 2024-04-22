import mongoose, { Schema, Document } from 'mongoose';
import { MONGO_USER_URI } from '../../../config/mongodb';

// Define interface for User document
interface IUser extends Document {
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
}

// Define user schema
const userSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Connect to MongoDB
mongoose.connect(MONGO_USER_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define and export User model
export default mongoose.model<IUser>('User', userSchema);
