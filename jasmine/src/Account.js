function Account() {
  this.balance = 0
  this.deposits = []
}

Account.prototype = {
  constructor: Account,

  deposit: function(amount, date = new Date) {
    this.balance += amount
    var deposit = {
      amount: amount,
      date: date
    }
    this.deposits.push(deposit)
  },

  withdraw: function(amount) {
    this.balance -= amount
  }
}
