Bank - Tech Test practice
=========================

## Description

This JavaScript app simulates a simple bank, allowing a user to create an account, make deposit and withdrawal transactions, and print a statement of account activities.

------

### Technologies used

- JavaScript
- Jasmine testing framework
- ESLint
- Test coverage using Istanbul nyc (to be configured fully)


### Personal motivation

- Further improve my problem solving approach
- Further improve my code quality

------

## Steps to download

1. Fork this [repo](https://github.com/mattTea/bank)

2. `git clone git@github.com:<userName>/bank` onto your local machine

3. run `npm install` to install all packages

------

## To run tests

After forking and cloning repo,

- run `npm test` to run tests in command line
- run `npm run coverage` to run tests and see command line test coverage report

- run `./node_modules/.bin/eslint path/to/file.js` to run linter

------

## To use app

1. Copy path of `index.html` and paste into address bar of browser
2. Open dev tools
3. Use console commands to interact with the app

```javascript
account = new Account
// => Account {balance: 0, transactions: Array(0)}

account.deposit(100).withdraw(40)
// => Account {balance: 60, transactions: Array(2)}

statement = new Statement(account)
// => Statement {account: Account}

statement.print()
// => "date || credit || debit || balance
//    08/05/2019 || || 40.00 || 60.00
//    08/05/2019 || 100.00 || || 100.00"

```

------

## Problem breakdown

Link to [problem breakdown](https://github.com/mattTea/bank/blob/master/problem_breakdown.md)

------

## Specification

### Requirements

- You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).


### Acceptance criteria

Given a client makes a deposit of 1000 on 10-01-2012,
and a deposit of 2000 on 13-01-2012,
and a withdrawal of 500 on 14-01-2012,
when she prints her bank statement,
then she should see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

------

## Original README

[Link to original repo and readme](https://github.com/makersacademy/course/blob/master/individual_challenges/bank_tech_test.md)
