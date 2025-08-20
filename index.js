import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/dbconnact.js';
// import authRoutes from './routes/authRoutes.js'; // uncomment when routes ready
import { registerUser, loginUser } from './controllers/Auth-controllers/auth-controller.js';
import { showUser } from './controllers/Show-Users/show-user.js';

dotenv.config();
connectDB();

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
// app.use("/api/auth", authRoutes);

app.post('/register', registerUser)
app.post('/show-user', showUser)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
