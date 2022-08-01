const {Transaction} = require("../../models/transaction");

const gettransactions = async (req, res, next) => {
    const {_id} = req.user;
    // console.log(req.query.tasksPerPage, req.query.pageToSkip);
    // const transactions = await Transaction.find({owner:_id}).populate("category","type nameDropdown nameStatistics").sort({ 'createdAt' : -1 }).limit(6);
    //  const transactions = await Transaction.find({owner:_id}).populate("category","type nameDropdown nameStatistics").sort({ 'createdAt' : -1 }).limit(req.query.tasksPerPage).skip(req.query.tasksPerPage * req.query.pageToSkip);
    const transactions = await Transaction.find({owner:_id}).populate("category","type nameDropdown nameStatistics").sort({ 'createdAt' : -1 }).limit(req.query.tasksPerPage).skip(req.query.transactionsToSkip);
    res.json({
    status: 'success',
    code: 200,
    data:  {
      transactions
    }
  })
}

  module.exports = gettransactions;

