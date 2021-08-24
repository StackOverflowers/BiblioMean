const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');


router.post('/registerUser',userController.registerUser);

router.get('/listUser/:name?' , userController.listUser);

router.put('/updateUser',userController.updateUser);

router.put('/deleteUser',userController.deleteUser);

router.post('/registerAdmin',userController.registerAdmin);

router.post("/loginUser", userController.loginUser);

module.exports = router;