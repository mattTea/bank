/* eslint-disable */
var Account = require("../src/Account")

describe("Account", function() {
  let account
  
  beforeEach(function() {
    account = new Account
  })
  
  it("initialises with a balance of zero", function() {
    expect(account.balance).toEqual(0)
  })

  it("adds deposit amount of 100 to balance", function() {
    account.deposit(100)
    expect(account.balance).toEqual(100)
  })

  it("subtracts withdrawal amount of 40 from balance of 100", function() {
    account.deposit(100)
    account.withdraw(40)
    expect(account.balance).toEqual(60)
  })

  it("records date of deposit", function() {
    var date = new Date("2019-05-06")
    account.deposit(100, date)
    expect(account.listTransactions()[0].date).toEqual("06/05/2019")
  })

  it("records date of withdrawal", function() {
    var date = new Date("2019-05-07")
    account.deposit(100, date)
    account.withdraw(40, date)
    expect(account.listTransactions()[1].date).toEqual("07/05/2019")
  })

  it("adds deposit and withdrawal to transactions", function() {
    var date1 = new Date("2019-05-06")
    var date2 = new Date("2019-05-07")
    account.deposit(100, date1)
    account.withdraw(40, date2)
    expect(account.listTransactions().length).toEqual(2)
  })

  it("lists all transactions", function() {
    var date1 = new Date("2012-01-10")
    var date2 = new Date("2012-01-13")
    var date3 = new Date("2012-01-14")
    var transactions = [{type: "credit", amount: "1000.00", date: "10/01/2012", balanceAfterTransaction: "1000.00"},
    {type: "credit", amount: "2000.00", date: "13/01/2012", balanceAfterTransaction: "3000.00"},
    {type: "debit", amount: "500.00", date: "14/01/2012", balanceAfterTransaction: "2500.00"}]
    account.deposit(1000, date1).deposit(2000, date2).withdraw(500, date3)
    expect(JSON.stringify(account.listTransactions())).toEqual(JSON.stringify(transactions))
    // strange equality behaviour in Jasmine for objects and arrays, hence need to JSON.stringify()
    // see https://github.com/jasmine/jasmine/issues/786
  })
})