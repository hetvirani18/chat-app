import express from 'express';
import authRoutes from './routes/auth.route.js';
import dotenv from 'dotenv/config';
import { connectDB } from './lib/db.js';
import coookieParser from 'cookie-parser';

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(coookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})