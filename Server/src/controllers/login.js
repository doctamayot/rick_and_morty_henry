const users = require("../utils/user");
//console.log(users);
module.exports = (req, res) => {
  const { email, password } = req.query;

  const filtro = users.find(
    (user) => user.email === email && user.password === Number(password)
  );

  if (filtro) {
    res.status(200).json({
      access: true,
    });
  } else {
    res.status(400).json({ access: false });
  }
};
