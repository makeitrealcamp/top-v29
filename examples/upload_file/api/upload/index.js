const { Router } = require('express');
const multer = require('multer');

const { uploadSingleHandler } = require('./upload.controller');

const router = Router();
const upload = multer({ dest: './temp' });

router.post('/file', upload.single('file'), uploadSingleHandler);
router.post('/files', () => {});

module.exports = router;
