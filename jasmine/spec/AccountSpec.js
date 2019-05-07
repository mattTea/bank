describe("Account", function() {
  it("initialises with a balance of zero", function() {
    var account = new Account
    expect(account.balance).toEqual(0)
  })

  it("adds deposit amount of 100 to balance", function() {
    var account = new Account
    account.deposit(100)
    expect(account.balance).toEqual(100)
  })
})