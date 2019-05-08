/* eslint-disable */
describe("Feature", function() {
  it("lists all account activity on statement", function() {
    var account = new Account
    var statement = new Statement(account)
    var printedStatement = "date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00"
    var date1 = new Date("2012-01-10")
    var date2 = new Date("2012-01-13")
    var date3 = new Date("2012-01-14")
    account.deposit(1000, date1).deposit(2000, date2).withdraw(500, date3)
    expect(statement.print()).toEqual(printedStatement)
  })
})