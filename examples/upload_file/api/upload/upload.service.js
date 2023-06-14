const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dbzjtuxkn',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadImage(image) {
  try {
    const result = await cloudinary.uploader.upload(image, {
      folder: 'upload-images',
      use_filename: true,
      unique_filename: false,
    });
    return result;
  } catch (error) {
    console.log('🚀 ~ file: upload.service.js:42 ~ uploadImage ~ error', error);
    return error;
  }
}

module.exports = {
  uploadImage,
};
