/**
 * Main application routes
 */
const task = require('./api/task');
const user = require('./api/user');

function routes(app) {
  // API Routes
  app.use('/api/tasks', task);
  app.use('/api/users', user);
}

module.exports = routes;
