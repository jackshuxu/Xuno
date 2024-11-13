const express = require("express");
const router = express.Router();
const { generateMusic } = require("../controllers/musicController");

router.post("/generate", generateMusic);

module.exports = router;
