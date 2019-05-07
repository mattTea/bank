describe("Account", function() {
  it("is a type of Account", function() {
    var account = new Account
    expect(account).toBe instanceof (Account)
  })
})