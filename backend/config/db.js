import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://jash:jash1234@cluster0.w2bdd.mongodb.net/<dbname>?retryWrites=true&w=majority', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Mongo DB Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
