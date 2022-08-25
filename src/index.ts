import express from 'express';
import { connectDB } from "@/DB/connect"
const PORT = 5000;
const app: express.Express = express();
const router = express.Router();
// tslint:disable-next-line:no-var-requires
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route
import * as userRoute from '@/Routes/users';
import * as taskRoute from '@/Routes/tasks';

// ルーティング
app.use("/api/v0/users", userRoute);
app.use("/api/v1/tasks", taskRoute);

const start = async() => {
    try {
        // DBに接続
        connectDB.connect();

        app.listen(PORT, () => {
            console.log('start server');
            console.log('http://localhost:5000/');
        })
    } catch (error) {
        console.log('DBへの接続に失敗しました');
        console.warn(error)
    }
}

start()