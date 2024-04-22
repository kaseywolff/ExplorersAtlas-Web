import express from 'express';
import path from 'path';
import cors from 'cors';
import signupRouter from './routes/signup'; // Correct import statement for signupRouter

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static files
app.use(express.static('dist'));

// Routes
app.use('/api/signup', signupRouter); // Use signupRouter middleware

// Default route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

