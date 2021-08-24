const express = require('express');

const router = express.Router();


const roleController = require('../controllers/role');


router.post('/rolRegister',roleController.registerRole);

router.get('/listRoles/:name?' , roleController.listRole);

router.put('/modifyRole',roleController.updateRole);

module.exports = router;