const jwt = require('jsonwebtoken');
require('dotenv/config');

module.exports = {
  async addingToken(request, response) {
    const { id } = request.user;

    const token = jwt.sign({ id }, process.env.SECRET_JWT, {
      expiresIn: 1800, // expires in 30min
    });

    delete request.user['id'];

    response.json({ ...request.user, token });
  },
};
