/* eslint-disable */
let account
let statement

beforeEach(function() {
  account = jasmine.createSpyObj("account", ["listTransactions"])
  statement = new Statement(account)
})

describe("Statement", function() {
  it("calls transaction history from account", function() {
    account.listTransactions.and.returnValue(["deposit", "withdrawal"])
    statement.print()
    expect(account.listTransactions).toHaveBeenCalled()
  })
  
  it("lists all transactions for printStatement", function() {
    var printedStatement = "date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00"
    var transactions = [{type: "credit", amount: "1000.00", date: "10/01/2012", balanceAfterTransaction: "1000.00"},
    {type: "credit", amount: "2000.00", date: "13/01/2012", balanceAfterTransaction: "3000.00"},
    {type: "debit", amount: "500.00", date: "14/01/2012", balanceAfterTransaction: "2500.00"}]
    account.listTransactions.and.returnValue(transactions)
    expect(statement.print()).toEqual(printedStatement)
  })
})