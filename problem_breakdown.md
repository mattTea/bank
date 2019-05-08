Bank Problem
============

## Requirements

- You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)

- Deposits, withdrawal.

- Account statement (date, amount, balance) printing.

- Data can be kept in memory (it doesn't need to be stored to a database or anything).


## Acceptance criteria

Given a client makes a deposit of 1000 on 10-01-2012,
and a deposit of 2000 on 13-01-2012,
and a withdrawal of 500 on 14-01-2012,
when she prints her bank statement,
then she would see...

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```


## Solution structure

### Object model

Object | Messages
--------------- | --------------------
client | 
account | deposit(amount, date)
account | withdraw(amount, date)
account | printStatement()


### How would a user interact?

1. Create a new bank account with default value of 0 for balance
2. Call deposit method on the account, with a value (and possibly a date)
3. Call withdraw method on the account, with a value (and possibly a date)
4. Print statement showing all activity on the account
5. (Limit withdraw method to available funds)


## Technology to be used

- JavaScript
- Jasmine test framework

------

## Setup

### Download and install Jasmine test runner

- [Jasmine standalone install](https://github.com/jasmine/jasmine#installation)
    - Download the standalone distribution for your desired release from the [releases](https://github.com/jasmine/jasmine/releases) page
    - Create a Jasmine directory in your project - mkdir my-project/jasmine
    - Move the dist to your project directory - `mv jasmine/dist/jasmine-standalone-#.#.#.zip my-project/jasmine` (or just drag it in)
    - Change directory - `cd my-project/jasmine`
    - Unzip the dist - `unzip jasmine-standalone-#.#.#.zip`

- [Makers steps](https://github.com/makersacademy/course/blob/master/thermostat/setting_up_jasmine.md#to-complete-this-challenge-you-will-need-to)

- Create files in `spec` and then `src`
- Use script tags to load them in `SpecRunner.html`
- Open `SpecRunner.html`


### Install ESLint

Linter for JS files [getting started link](https://eslint.org/docs/user-guide/getting-started)

- `npm install eslint --save-dev`
- `./node_modules/.bin/eslint --init`
- Add some rules into the `eslintrc.js` file
- Run per file using `./node_modules/.bin/eslint {yourfile}.js`
- 


### Install Istanbul(nyc)

- npm i nyc --save-dev
- (not working)
- [npm link](https://www.npmjs.com/package/nyc)
- [github link](https://github.com/istanbuljs/nyc)


### Git

Initialise git and create github repo

------

## Simple first steps to build first tests

1. New bank account is a type of Account

2. New bank account has a balance of 0

3. Deposit 100 makes balance = 100

4. Deposit 100, then withdraw 40 makes balance = 60

5. Records date of deposit

6. Record date of withdrawal

7. Print statement shows all activity on account
    - Break this down...

    1. account.transactions is an array (and now combines deposits and withdrawals)
    2. account.printStatement is ordered with newest first


### Edge cases

1. (Prevents withdrawal greater than balance?) no requirement to suggest this

2. Protect against incorrect date formats
    - Passing incorrect data type into `deposit` and `withdraw` methods
