import express from 'express'
import {router} from "./routes/loginRoutes";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
console.log('Hell')

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({keys:['qwerty']}));
app.use(router);

app.listen(3000, () => {
    console.log('Listening on port 3000')
});