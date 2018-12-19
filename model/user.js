const bcrypt = require('bcrypt-nodejs');

const user = new user({
    user_type_id: number,
    name: String,
    description: String,
    password: String
});

// generating a hash
user.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  
  // checking if password is valid
  user.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
  };