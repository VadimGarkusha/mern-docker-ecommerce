const UserModel = require('../models/UserModel');

exports.socialLogin = (req, res) => {
  const { body } = req;
  console.log(body);

  return res.json('data');
}

exports.regularLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (user && user.validPassword(password))
    return res.json(user);

  return res.status(401).json({ error: "We didn't find an account with that email address or password." });
}