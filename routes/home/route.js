"use strict";
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Here is Root Page");
});
router.get('/login', (req, res) => {
    res.render("login");
});

module.exports = router;