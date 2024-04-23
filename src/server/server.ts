import express from 'express';
import path from 'path';
import cors from 'cors';
import signupRouter from './routes/signup';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static files
app.use(express.static(path.join(__dirname, 'dist')));

// access the environment variables
const PORT = process.env.PORT
const MONGO_USER_URI = process.env.MONGO_USER_URI;

// routes
app.use('/api/signup', signupRouter);

// default route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`MONGO_USER_URI: ${MONGO_USER_URI}`); // Log MongoDB connection URI
});
