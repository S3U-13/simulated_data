const bcrypt = require("bcrypt");

async function hasPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

module.exports = hasPassword;
