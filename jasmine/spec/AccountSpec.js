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

  it("Records date of deposit", function() {
    account.deposit(100, "7th May 2019")
    expect(account.deposits[0].date).toEqual("7th May 2019")
  })
})