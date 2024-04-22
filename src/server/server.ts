import express from 'express';
import path from 'path';
import cors from 'cors';
import signupRouter from './routes/signup';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static files
app.use(express.static(path.join(__dirname, 'dist')));

const PORT = process.env.PORT || 3000;

// routes
app.use('/api/signup', signupRouter);

// default route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});