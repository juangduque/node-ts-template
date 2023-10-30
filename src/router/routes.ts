import express from 'express';

export const routerApi = (app: express.Application): void => {
	const router = express.Router();
	app.use('/api/v1', router);
};
