import models from '../models/index.js';

const { Users } = models;

export default {
  async index(_req, res) {
    const users = await Users.findAll({
      order: [['id', 'ASC']],
      attributes: { exclude: ['senha'] },
    });
    res.json(users);
  },
};
