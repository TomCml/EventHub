import express from 'express';
import cors from 'cors';

const port = 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Backend is running!' });
});

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});
