import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDb connect sucessfully ${db.connection.host}`);
  } catch (err) {
    console.log(`MongoDB error : ${err}`);
  }
};

export default connectDatabase;
