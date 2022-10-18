const express = require('express');
const router = express.Router();
const transactionController = require('../../controllers/transaction.controller');
router
    .route('/')
    .get(transactionController.getTransactions);

module.exports = router;