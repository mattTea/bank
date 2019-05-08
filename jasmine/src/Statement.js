function Statement(account) {
  this.account = account || new Account()
}

Statement.prototype = {
  constructor: Statement,
  print: function() {
    return this.build()
  },

  build: function() {
    var statementRows = []
    var transactions = this.account.listTransactions()
    for (i in transactions) {
      if (transactions[i].type === "credit") {
        statementRows.push(`${transactions[i].date} || ${transactions[i].amount} || || ${transactions[i].balanceAfterTransaction}`)
      } else {
        statementRows.push(`${transactions[i].date} || || ${transactions[i].amount} || ${transactions[i].balanceAfterTransaction}`)
      }
    }
    statementRows.push("date || credit || debit || balance")
    return statementRows.reverse().join("\n") 
  }
}