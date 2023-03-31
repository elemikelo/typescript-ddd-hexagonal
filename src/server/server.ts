import express from 'express';
import bodyParser from 'body-parser';
import Router from 'express-promise-router';
import { registerRoutes } from '../apps/Sales/api/routes';
const app = express();
const port = process.env.PORT || 3000;
const router = Router()
app.use(router);
app.use(bodyParser.json());
registerRoutes(router);

app.listen(port, () => {
    console.log(`Forest corre en el puerto:  ${port}`);
});
