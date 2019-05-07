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
    account.deposit(100, "06/05/2019")
    expect(account.transactions[0].date).toEqual("06/05/2019")
  })

  it("records date of withdrawal", function() {
    var date = new Date("2019-05-07")
    account.deposit(100, date)
    account.withdraw(40, date)
    expect(account.transactions[1].date).toEqual("07/05/2019")
  })

  it("adds deposit and withdrawal to transactions", function() {
    var date1 = new Date("2019-05-06")
    var date2 = new Date("2019-05-07")
    account.deposit(100, date1)
    account.withdraw(40, date2)
    expect(account.transactions.length).toEqual(2)
  })
})