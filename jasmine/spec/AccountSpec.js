describe("Account", function() {
  it("is a type of Account", function() {
    var account = new Account
    expect(account).toBe instanceof(Account)
  })

  it("initialises with a balance of zero", function() {
    var account = new Account
    expect(account.balance).toEqual(0)
  })
})