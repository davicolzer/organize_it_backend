import mongoose from 'mongoose';
import { MONGO_DB_URL } from '../../../utils/constants';
import { AppError } from '../../errors/appError';

export async function connectDB() {
  try {
    if (!MONGO_DB_URL) {
      throw new AppError('Falta url do banco',500);
    }
    await mongoose.connect(MONGO_DB_URL);

    console.log('conectado ao banco');
  } catch (err) {
    console.log({message: err.message})
  }
}

export async function disconnectDB() {
  await mongoose.disconnect();
}
