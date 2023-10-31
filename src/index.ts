import { routerApi } from '@router/index';
import express, { type Request, type Response } from 'express';

const PORT = 3000;
const app = express();
app.use(express.json());

routerApi(app);

app.get('/', (req: Request, res: Response) => {
	res.json({ message: 'Hello World! srggts' });
});

app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`Server is running on http://localhost:${PORT}`);
});
