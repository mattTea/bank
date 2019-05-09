/* eslint-disable */
var Account = require("../src/Account")

let account
let date1
let fakeDepositTransaction1
let fakeWithdrawalTransaction1

beforeEach(function() {
  account = new Account
  date1 = new Date("2019-05-06")
  date2 = new Date("2019-05-07")
  fakeDepositTransaction1 = {
    type: "credit",
    amount: 100.00,
    date: account.convertDate(date1),
    balanceAfterTransaction: account.balance + this.amount
  }
  fakeWithdrawalTransaction1 = {
    type: "debit",
    amount: 40.00,
    date: account.convertDate(date2),
    balanceAfterTransaction: account.balance - this.amount
  }
})

describe("Account", function() {
  it("initialises with a balance of zero", function() {
    expect(account.balance).toEqual(0)
  })

  it("adds deposit amount of 100 to balance", function() {
    account.deposit(100, date1, fakeDepositTransaction1)
    expect(account.balance).toEqual(100)
  })

  it("subtracts withdrawal amount of 40 from balance of 100", function() {
    account.deposit(100, date1, fakeDepositTransaction1)
    account.withdraw(40, date2, fakeWithdrawalTransaction1)
    expect(account.balance).toEqual(60)
  })

  it("records date of deposit", function() {
    account.deposit(100, date1, fakeDepositTransaction1)
    expect(account.listTransactions()[0].date).toEqual("06/05/2019")
  })

  it("records date of withdrawal", function() {
    account.deposit(100, date1, fakeDepositTransaction1)
    account.withdraw(40, date2, fakeWithdrawalTransaction1)
    expect(account.listTransactions()[1].date).toEqual("07/05/2019")
  })

  it("adds deposit and withdrawal to transactions", function() {
    var date2 = new Date("2019-05-07")
    account.deposit(100, date1, fakeDepositTransaction1)
    account.withdraw(40, date2, fakeWithdrawalTransaction1)
    expect(account.listTransactions().length).toEqual(2)
  })

  it("lists all transactions", function() {
    var date3 = new Date("2012-01-10")
    var date4 = new Date("2012-01-13")
    var date5 = new Date("2012-01-14")
    var fakeDepositTransaction2 = {
      type: "credit",
      amount: (1000).toFixed(2),
      date: account.convertDate(date3),
      balanceAfterTransaction: (1000).toFixed(2),
    }
    var fakeDepositTransaction3 = {
      type: "credit",
      amount: (2000).toFixed(2),
      date: account.convertDate(date4),
      balanceAfterTransaction: (3000).toFixed(2),
    }
    fakeWithdrawalTransaction2 = {
      type: "debit",
      amount: (500).toFixed(2),
      date: account.convertDate(date5),
      balanceAfterTransaction: (2500).toFixed(2),
    }

    var transactions = [{type: "credit", amount: "1000.00", date: "10/01/2012", balanceAfterTransaction: "1000.00"},
    {type: "credit", amount: "2000.00", date: "13/01/2012", balanceAfterTransaction: "3000.00"},
    {type: "debit", amount: "500.00", date: "14/01/2012", balanceAfterTransaction: "2500.00"}]
    
    account.deposit(1000, date3, fakeDepositTransaction2)
      .deposit(2000, date4, fakeDepositTransaction3)
      .withdraw(500, date5, fakeWithdrawalTransaction2)


    expect(JSON.stringify(account.listTransactions())).toEqual(JSON.stringify(transactions))
    // strange equality behaviour in Jasmine for objects and arrays, hence need to JSON.stringify()
    // see https://github.com/jasmine/jasmine/issues/786
  })
})
