import mongoose from 'mongoose';
import config from '../config';

export default () => {
  mongoose.connect(config.mongoURLLocal, { useNewUrlParser: true }, (err) => {
    if (err) throw err;
    console.log('Database created!'.green);
  });
}