import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => {
	response.send('<h1>Olá!<h1>');
});

export default router;
