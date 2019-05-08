function Account() {
  this.balance = 0
  this.transactions = []
}

Account.prototype = {
  constructor: Account,

  deposit: function(amount, date = new Date) {
    this.balance += amount
    var transaction = this.createTransaction("credit", amount.toFixed(2), this.convertDate(date), this.balance.toFixed(2))
    this.transactions.push(transaction)
    return this
  },

  withdraw: function(amount, date = new Date) {
    this.balance -= amount
    var transaction = this.createTransaction("debit", amount.toFixed(2), this.convertDate(date), this.balance.toFixed(2))
    this.transactions.push(transaction)
    return this
  },

  convertDay: function(date) {
    var day = date.getDate()
    if (day < 10) day = `0${day}`
    return day
  },

  convertMonth: function(date) {
    var month = date.getMonth()
    if (month < 10) month = `0${month + 1}`
    return month
  },

  convertDate: function(date) {
    var day = this.convertDay(date)
    var month = this.convertMonth(date)
    var year = date.getFullYear()
    return `${day}/${month}/${year}`
  },

  createTransaction: function(type, amount, date, balanceAfterTransaction) {
    var transaction = {
      type: type,
      amount: amount,
      date: date,
      balanceAfterTransaction: balanceAfterTransaction
    }
    return transaction
  },

  listTransactions: function() {
    return this.transactions
  }
}

module.exports = Account