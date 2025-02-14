const { User } = require("../models");
const Service = require("./Service");

class UserService extends Service {
  constructor() {
    super(User);
  }
}

module.exports = UserService;
