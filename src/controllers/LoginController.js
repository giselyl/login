const { query_login } = require('../infrastructure/repository/loginRepository');
const md5 = require('md5');

module.exports = {
  async login(request, response, next) {
    const { login, password } = request.body;
    const hash = md5(password);
    const user = await query_login(login, hash);
    if (!user) {
      return response
        .status(400)
        .json({ error: 'No USER founded with this login and password' });
    }
    request.user = user;
    return next();
  },
};
