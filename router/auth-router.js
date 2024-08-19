const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controller');
const signUpSchema = require("../validators/auth-signUp-validator");
const validate = require('../middlewares/validate-middleware');
const loginSchema = require('../validators/auth-login-validator');


router.route("/").get(authControllers
    .home);

router.route("/register").post( validate(signUpSchema), authControllers.register);
router.route("/login").post(validate(loginSchema),authControllers.login);

module.exports = router;