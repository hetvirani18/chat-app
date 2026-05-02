import express from 'express';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import dotenv from 'dotenv/config';
import { connectDB } from './lib/db.js';
import coookieParser from 'cookie-parser';
import cors from 'cors';
import { app, server } from './lib/socket.js';

const PORT = process.env.PORT;

app.use(express.json({limit: '10mb'}));
app.use(express.json());
app.use(coookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});