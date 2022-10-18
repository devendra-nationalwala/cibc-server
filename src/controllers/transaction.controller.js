const { transactionService } = require('../services');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');

const getTransactions = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['startDate', 'endDate']);
    console.log(JSON.stringify(filter));
    const transaction = await transactionService.queryTransactions(filter);
    if (!transaction) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Transaction not found');
    }
    res.send(transaction);
});

module.exports = {
    getTransactions
};