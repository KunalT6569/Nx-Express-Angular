import * as mongoose from 'mongoose';

export const connectDb = () => {
  mongoose.connect(
    process.env.DB_CONNECTION_STR,
    { useNewUrlParser: true },
    err => {
      if (err) {
        process.exit(1);
      }

      console.log('-------------------Mongo DB Connected-------------------');
    }
  );
};
