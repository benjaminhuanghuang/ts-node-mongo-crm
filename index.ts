import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import { Mongoose } from 'mongoose';

import messenger from './src/controllers/createMessage';

const app = express();
const PORT: number = 3000;
const mongoUser: string = "admin";
const mongoUserPwd: string = "admin1234";

let messenges = new messenger(PORT);

// mongoose connection
const MONGO_URL: string = `mongodb://${mongoUser}:${mongoUserPwd}@ds147965.mlab.com:47965/crm_dev`;
mongoose.connect(MONGO_URL, { useNewUrlParser: true });

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(messenges.messagePrint())
);

app.listen(PORT, () =>
    console.log(messenges.messagePrint())
);