import mongoose from 'mongoose';
import { MONGO_DB_URL } from '../../../utils/constants';

export async function connectDB() {
  try {
    if (!MONGO_DB_URL) {
      throw new Error('Falta url do banco');
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
