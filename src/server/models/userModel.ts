const mongoose = require('mongoose');
import { MONGO_USER_URI } from '../../../config/mongodb';

// connect to MongoDB
mongoose.connect(MONGO_USER_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('User', userSchema);