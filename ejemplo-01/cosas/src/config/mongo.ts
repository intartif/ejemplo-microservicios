import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
  const DB_URI = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;
  await connect(DB_URI);
}

export default dbConnect;
