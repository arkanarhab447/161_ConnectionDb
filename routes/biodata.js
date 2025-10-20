const express = require('express');
const router = express.Router();
const biodataController = require('../controller/controller');


router.get('/', biodataController.getAllBiodata);

module.exports = router;
