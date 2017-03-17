class BankAccount {
  constructor (balance) {
    this.balance = typeof balance === 'number' ? balance : 0
  };

  set balance (val) {
    this._balance = val;
    this.balanceUpdateAt = new Date();
  }

  get balance () {
    return this._balance;
  }

  deposit(amount) {
    if(typeof amount === 'number'){
      this.balance += amount;
      return true;
    } else {
      console.log('Amount must be a number');
      return false;
    }
  };
  withdrawal(amount) {
    if(typeof amount === 'number'){
      this.balance -= amount;
      return this.balance;
    } else {
      console.log('Amount must be a number');
      return false;
    }
  };

  printBalance() {
    console.log(`Your balance is $${this.balance}! Last update at ${this.balanceUpdateAt}.`);
  };
};

var account = new BankAccount(100);
account.deposit(100);
account.withdrawal(10);
account.printBalance();

var account2 = new BankAccount('cknjkd');
account2.deposit('bacoinYa');
account2.withdrawal(true);
account2.printBalance();
