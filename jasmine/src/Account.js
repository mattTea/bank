function Account() {
  this.balance = 0
}

Account.prototype = {
  constructor: Account,

  deposit: function(amount) {
    this.balance += amount
  }
}
