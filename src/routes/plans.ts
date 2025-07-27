import { Router, Request, Response } from 'express';

const router = Router();

// Placeholder list plans
router.get('/', async (req: Request, res: Response) => {
  // TODO: Fetch from Prisma
  res.json([
    { id: 'free',    name: 'Free',     monthlyPriceCents: 0,   yearlyPriceCents: 0 },
    { id: 'pro',     name: 'Pro',      monthlyPriceCents: 499, yearlyPriceCents: 4999 },
    { id: 'proplus', name: 'Pro Plus', monthlyPriceCents: 799, yearlyPriceCents: 7999 }
  ]);
});

export default router;
