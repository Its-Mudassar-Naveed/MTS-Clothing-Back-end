const User = require("../Models/model");
const bcrypt = require("bcrypt");

module.exports = SigninUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    await User.findone({ email: email }, (err, user) => {
      if (user) {
        if (password === user.password) {
          res.send({ message: "login sucess", user: user });
        } else {
          res.send({ message: "wrong credentials" });
        }
      }
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
module.exports = SignupUser = async (req, res) => {
  try {
    const { firstname, lastname, email, confirmPassword } = req.body;

    const password = bcrypt.hashSync(confirmPassword, bcrypt.genSaltSync(8));
    
    User.findOne({ email: email }, (err, user) => {
      if (user) {
        res.send({ message: "user already exist" });
      } else {
        const user = new User({ firstname, lastname, email, password });
        user.save((err) => {
          if (err) {
            res.send(err);
          } else {
            res.send({ message: "sucessfull" });
          }
        });
      }
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
