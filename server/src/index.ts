import express from 'express';
import 'dotenv/config';
import router from './routes';

const port= process.env.PORT;

const app = express();

app.use(router);

app.listen(port, () => {
	console.log(`🔥 Server started at http://localhost:${port}`);
});
