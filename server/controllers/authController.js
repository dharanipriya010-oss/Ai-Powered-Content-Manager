exports.register = async (req, res) => {

  const { name, email } = req.body;

  res.json({
    message: "User Registered",
    name,
    email
  });

};

exports.login = async (req, res) => {

  const { email } = req.body;

  res.json({
    message: "Login Successful",
    email
  });

};