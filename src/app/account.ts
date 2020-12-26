export class Iaccount{
    accountNumber: bigint
    balance: any | number
    acct_type: string
    interest_rate: number
    date_of_creation: Date


    public setBalance(num: number): void {
        this.balance = num;
    }

    constructor(balance: number, acct_type: string) {
        this.balance = balance;
        this.acct_type = acct_type;
        this.interest_rate = 0;
      }


    
 
}