import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './src/routes';

const app = express();
app.use(express.json())
app.use(cors())
app.use(router);

app.listen(process.env.PORT || 8081, () => {
  console.log(`server running in port ${process.env.PORT || 8081} || Current time: ` + new Date().toISOString());
})