const fs = require('fs');

const { uploadImage } = require('./upload.service');

async function uploadSingleHandler(req, res) {
  const { path, size } = req.file; // as Express.Multer.File;

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

async function uploadMultipleHandler(req, res) {
  const files = req.files; // as Express.Multer.File[];

  if (!files.length) {
    return res.status(400).json({ message: 'No files provided' });
  }

  try {
    const promises = files.map((file) => uploadImage(file.path));

    const results = await Promise.all(promises);

    return res.status(201).json(results);
  } catch (error) {
    return res.status(500).json(error);
  } finally {
    files.forEach((file) => fs.unlinkSync(file.path));
  }
}

module.exports = {
  uploadSingleHandler,
  uploadMultipleHandler,
};
