function Account() {
  this.balance = 0
  this.transactions = []
}

Account.prototype = {
  constructor: Account,

  deposit: function(amount, date = new Date) {
    this.balance += amount
    var deposit = {
      type: "credit",
      amount: amount.toFixed(2),
      date: this.convertDate(date),
      balanceAfterTransaction: this.balance.toFixed(2)
    }
    this.transactions.push(deposit)
    return this
  },

  withdraw: function(amount, date = new Date) {
    this.balance -= amount
    var withdrawal = {
      type: "debit",
      amount: amount.toFixed(2),
      date: this.convertDate(date),
      balanceAfterTransaction: this.balance.toFixed(2)
    }
    this.transactions.push(withdrawal)
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

module.exports = Account