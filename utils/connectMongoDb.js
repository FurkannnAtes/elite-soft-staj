import mongoose from "mongoose";

const connectDb = async () => {
  const url = process.env.MONGODB_URL;

  if (!url) {
    throw new Error("There is no db url!!!");
  }

  try {
    await mongoose.connect(url);
    console.log("Mongodb connect succesfuly!!");
  } catch (error) {
    console.log("Mongodb connect error!!");
  }
};

export default connectDb;
