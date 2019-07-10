const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/UserModel');

exports.socialSignUp = (req, res) => {
  const { body } = req;
  console.log(body);

  return res.json('data');
}

exports.regularSignUp = async (req, res) => {
  const {email, password} = req.body;

  const userStatus = await UserModel.findOne({email}).catch(error => (error) ? res.status(404).json(error) : null);
  const encryptedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

  if (userStatus)
    return res.status(400).json({ errors: 'User is already exists.' });

  const _id = mongoose.Types.ObjectId();
  const token = jwt.sign({ _id, email: email }, 'RESTFULAPIs');

  const newUser = new UserModel({
    _id,
    email,
    password: encryptedPassword,
    token: token
  });

  UserModel.create(newUser, (error, user) => {
    if (error) {
      console.log(error)
      res.status(400).json({success: false, error});
    } else {
      res.status(200).json({
        success: true,
        data: {
          id: user._id,
          email: user.email,
          token: user.token
        }
      });
    }
  });
};