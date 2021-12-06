import 'module-alias/register';
import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import createDatabaseConnection from 'database/createConnection';

import { attachPrivateRoutes } from './routes';

const establishDatabaseConnection = async (): Promise<void> => {
  try {
    await createDatabaseConnection();
  } catch (error) {
    console.log(error);
  }
};

const initializeExpress = (): void => {
	const app = express();

	app.use(cors());
	app.use(helmet());
	app.use(express.json());
	app.use(express.urlencoded());

	attachPrivateRoutes(app);

	app.listen(process.env.PORT || 3000);
};

const initializeApp = async (): Promise<void> => {
  await establishDatabaseConnection();
  initializeExpress();
};

initializeApp();