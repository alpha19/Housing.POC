import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

const initializeExpress = (): void => {
	const app = express();

	app.use(cors());
	app.use(helmet());
	app.use(express.json());
	app.use(express.urlencoded());


}

const initializeApp = async (): Promise<void> => {
  initializeExpress();
};

initializeApp();