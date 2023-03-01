class BankAC{
    constructor(Balance ){
        this._balance =Balance;
        
    }
    get GetBalance(){
        return this._balance;
    }
    set setAmount(Amount){
        if(Amount > 0)
        {
            return this._balance += Amount;
        }
    }
}

const personA =new BankAC(8000)
// console.log(personA.GetBalance)

 personA.setAmount=500;
console.log(personA.GetBalance)