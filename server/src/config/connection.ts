import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

const db = async (): Promise<typeof mongoose.connection> => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to database');
        return mongoose.connection;
    } catch (error) {
        console.log('Error connecting to database: ', error);
        console.log('MONGODB_URI: ', MONGODB_URI);
        throw new Error('Database connection failed');  
    }
};

export default db;
