import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema } = mongoose;

const UsersModel = new Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    },
    isSocial: {
      type: Boolean,
      default: false
    },
    socialId: String
  },
  {
    timestamps: true
  }
);

// hash the password
UsersModel.methods.generateHash = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

// checking if password is valid
UsersModel.methods.validPassword = (password) =>
  bcrypt.compareSync(password, this.password);

module.exports = mongoose.model('Users', UsersModel);