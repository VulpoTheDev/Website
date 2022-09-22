import mongoose from 'mongoose';

// @ts-ignore
const connectDB = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect("mongodb://localhost:27017/blog");
  return handler(req, res);
};

export default connectDB;