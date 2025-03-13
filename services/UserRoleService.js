const { UserRole } = require("../models");
const Service = require("./Service");

class UserRoleService extends Service {
  constructor() {
    super(UserRole);
  }
}

module.exports = UserRoleService;
