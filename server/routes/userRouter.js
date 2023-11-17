const { Router } = require('express');
const { getCurrentUser, updateUser } = require('../controllers/userController');
const { validateUpdateUserInput } = require('../middleware/validationMiddleware');

const router = Router();

router.get('/current-user', getCurrentUser);
router.patch('/update-user', validateUpdateUserInput, updateUser);

module.exports = router;
