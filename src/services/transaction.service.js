const { Transaction } = require('../models');

/**
 * Function to get list of transaction for date filters
 * @param {*} filter start date and end date for filter
 * @returns list of transactions
 */
const queryTransactions = async (filter) => {
    const users = await Transaction.find({
        date:{
            $gte: new Date(filter.startDate),
            $lt: new Date(filter.endDate).getTime() + 86399999
        },
        status:{
            $in : ["COMPLETED","IN PROGRESS","REJECTED"]
        }
    });
    return users;
};


module.exports = {
    queryTransactions
};
