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
    expect(account.deposits[0].date).toEqual("06/05/2019")
  })

  it("records date of withdrawal", function() {
    account.deposit(100)
    account.withdraw(40, "07/05/2019")
    expect(account.withdrawals[0].date).toEqual("07/05/2019")
  })
})