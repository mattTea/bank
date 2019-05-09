var Account = require("./Account")

function Statement(account) {
  this.account = account || new Account()
}

Statement.prototype = {
  constructor: Statement,
  
  print: function() {
    var statementRows = []
    var that = this
    this.account.listTransactions().forEach(function(transaction) {
      statementRows.push(that.formatTransaction(transaction))
    })
    statementRows.push("date || credit || debit || balance")
    return statementRows.reverse().join("\n")
  },

  formatTransaction: function(transaction) {
    if (transaction.type === "credit") {
      return `${transaction.date} || ${transaction.amount} || || ${transaction.balanceAfterTransaction}`
    } else {
      return `${transaction.date} || || ${transaction.amount} || ${transaction.balanceAfterTransaction}`
    }
  }
}

if (typeof (module) !== "undefined") {
  module.exports = Statement
}