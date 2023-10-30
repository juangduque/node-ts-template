import express from 'express';

const router = express.Router();

router.get('/', (req, res: express.Response) => {
	res.json({ message: 'Hello from auth' });
});

export default router;
