const uploadRouter = require('./api/upload');

function router(app) {
  app.use('/api/upload', uploadRouter);
}

module.exports = router;
