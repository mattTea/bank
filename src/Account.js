var Transaction = require("./Transaction")

function Account() {
  this.balance = 0
  this.transactions = []
}

Account.prototype = {
  constructor: Account,

  deposit: function(
    amount,
    date = new Date,
    transaction = new Transaction("credit", amount.toFixed(2), this.convertDate(date), (this.balance + amount).toFixed(2))
  )
  {
    this.balance += amount
    this.transactions.push(transaction)
    return this
  },

  withdraw: function(
    amount,
    date = new Date,
    transaction = new Transaction("debit", amount.toFixed(2), this.convertDate(date), (this.balance - amount).toFixed(2))
  ) 
  {
    this.balance -= amount
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

  listTransactions: function() {
    return this.transactions
  }
}

if (typeof (module) !== "undefined") {
  module.exports = Account
}
