const Controller = require("./Controller");
const UserRoleService = require("../services/UserRoleService");

class UserRoleController extends Controller {
  constructor() {
    super(new UserRoleService());
  }
}

module.exports = UserRoleController;
