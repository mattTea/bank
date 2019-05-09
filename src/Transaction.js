function Transaction(type, amount, date, balanceAfterTransaction) {
  this.type = type,
  this.amount = amount,
  this.date = date,
  this.balanceAfterTransaction = balanceAfterTransaction
}

if (typeof (module) !== "undefined") {
  module.exports = Transaction
}