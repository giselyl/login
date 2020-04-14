const connection = require('../../database/connection');

module.exports = {
  async query_login(login, password) {
    return connection('users')
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
  },
};
