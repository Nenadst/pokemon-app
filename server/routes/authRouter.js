const { Router } = require('express');
const { register, login, logout } = require('../controllers/authController');
const { validateRegisterInput, validateLoginInput } = require('../middleware/validationMiddleware');

const router = Router();

router.post('/register', validateRegisterInput, register);
router.post('/login', validateLoginInput, login);
router.get('/logout', logout);

module.exports = router;
