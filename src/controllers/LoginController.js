const connection = require('../database/connection');

module.exports = {
  async login(request, response, next) {
    const { login, password } = request.body;

    const user = await connection('users')
      .where({
        login,
        password,
      })
      .join('companies', 'users.company_id', '=', 'companies.id')
      .select(
        'users.name as user_name',
        'users.email',
        'users.phone',
        'companies.name as company_name',
        'companies.cnpj as company_cnpj',
        'companies.city as company_city',
        'companies.state as company_state',
        'companies.country as company_country',
        'users.id'
      )
      .first();
    if (!user) {
      return response
        .status(400)
        .json({ error: 'No USER founded with this login and password' });
    }
    request.user = user;
    return next();
  },
};
