/**
 * Loads and initializes the different paths, by passing router.
 */
const express = require('express');
const router = express.Router();

const URLController = require('./URL');

new URLController(router);

module.exports = router;