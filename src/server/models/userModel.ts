import mongoose, { Schema, Document } from 'mongoose'; // Import mongoose directly

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
    unique: true,
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

// Define and export User model
export default mongoose.model<IUser>('User', userSchema);
