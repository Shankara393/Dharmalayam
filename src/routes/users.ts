import { Router } from 'express';

const router = Router();

// Placeholder signup endpoint
router.post('/signup', async (req, res) => {
  // TODO: Validate input and create user using Prisma
  res.json({ message: 'signup endpoint' });
});

// Placeholder login endpoint
router.post('/login', async (req, res) => {
  // TODO: Verify credentials
  res.json({ message: 'login endpoint' });
});

export default router;
