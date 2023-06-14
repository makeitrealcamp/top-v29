const fs = require('fs');

const { uploadImage } = require('./upload.service');

async function uploadSingleHandler(req, res) {
  const { path, size } = req.file;

  const maxSize = 1024 * 1024 * 2; // 2mb

  if (size > maxSize) {
    fs.unlinkSync(path);
    return res.status(400).json({ message: 'File is too large' });
  }

  try {
    const result = await uploadImage(path);

    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json(error);
  } finally {
    fs.unlinkSync(path);
  }
}

module.exports = {
  uploadSingleHandler,
};
