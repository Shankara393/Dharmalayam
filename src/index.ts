import express from 'express';
import userRoutes from './routes/users';
import planRoutes from './routes/plans';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Dharmalayam API');
});

app.use('/auth', userRoutes);
app.use('/plans', planRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
