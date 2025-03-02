import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import mongoose from 'mongoose';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.join(__dirname, '../../.env');
dotenv.config({ path: envPath });


const MONGODB_URI = process.env.MONGODB_URI || '';

const db = async (): Promise<typeof mongoose.connection> => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to database');
        return mongoose.connection;
    } catch (error) {
        console.log('Error connecting to database: ', error);
        throw new Error('Database connection failed');  
    }
};

export default db;
