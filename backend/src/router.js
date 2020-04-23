const routes = require("express").Router();

const UserController = require('./controllers/UserController');

routes.get('/', (_, res) => res.json({ok: true, msg: "get out"}));

routes.get('/user', UserController.index);

module.exports = routes; 