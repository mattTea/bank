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

  printStatement: function() {
    var statementRows = []
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === "credit") {
        statementRows.push(`${this.transactions[i].date} || ${this.transactions[i].amount} || || ${this.transactions[i].balanceAfterTransaction}`)
      } else {
        statementRows.push(`${this.transactions[i].date} || || ${this.transactions[i].amount} || ${this.transactions[i].balanceAfterTransaction}`)
      }
    }
    statementRows.push("date || credit || debit || balance")
    return statementRows.reverse().join("\n")
  }
}
