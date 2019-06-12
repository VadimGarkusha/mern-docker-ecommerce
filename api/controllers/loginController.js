exports.socialLogin = (req, res) => {
  const { body } = req;
  console.log(body);

  return res.json('data');
}

exports.regularLogin = (req, res) => {
  const { body } = req;
  console.log(body);

  return res.json('data');
}