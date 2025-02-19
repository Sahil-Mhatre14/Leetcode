/**
 * @param {number[]} balance
 */

//  {
//     accountNumber: {
//         balance: balence
//     }
//  }
var Bank = function(balance) {
    this.accounts = {}

    for (let i = 0; i < balance.length; i++) {
        this.accounts[i + 1] = {
            balance: balance[i]
        }
    }
};

/** 
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(account1, account2, money) {
    if (!this.accounts[account1] || this.accounts[account1].balance < money || !this.accounts[account2]) {
        return false
    }

    this.accounts[account1].balance -= money
    this.accounts[account2].balance += money
    return true
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function(account, money) {
    if (!(account in this.accounts)) {
        return false
    }

    this.accounts[account].balance += money
    return true
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function(account, money) {
     if (!(account in this.accounts) || this.accounts[account].balance < money) {
        return false
    }

    this.accounts[account].balance -= money
    return true
};

/** 
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */