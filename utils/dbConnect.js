import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined in .env');
}

let cached = global.mongoose || null;

export async function dbConnect() {
  if (cached) {
    return cached;
  }
  const conn = await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cached = conn;
  global.mongoose = conn;
  return conn;
}
