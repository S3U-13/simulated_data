const express = require("express");
const router = express.Router();
const apiLogger = require("../middleware/apiLogger");

//route
router.use(apiLogger);

module.exports = router;
