const UserModel = require('../models/UserModel');

exports.socialLogin = (req, res) => {
  const { body } = req;
  console.log(body);

  return res.json('data');
}

exports.regularLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({email});
  console.log(user)
  if(user && user.validPassword(password)){
    return res.json(user);
  }

  return res.status(401);
}