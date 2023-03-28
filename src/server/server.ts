import express from 'express';
import bodyParser from 'body-parser';
import { config } from '../config/dependencies';
import { SubscriptionRouter } from "../Contexts/Subscriptions/api/routes/subscription.router";
import { ContainerBuilder } from "node-dependency-injection";

const app = express();
const port = process.env.PORT || 3000;
const container = new ContainerBuilder();
config(container);

const subscriptionRouter = SubscriptionRouter(container);

app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hola que ase!'));
app.use(subscriptionRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
