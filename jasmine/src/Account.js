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
      amount: amount,
      date: date
    }
    this.transactions.push(deposit)
  },

  withdraw: function(amount, date = new Date) {
    this.balance -= amount
    var withdrawal = {
      type: "debit",
      amount: amount,
      date: this.convertDate(date)
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
  }
}
