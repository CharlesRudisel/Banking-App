export class Iaccount{
    accountNumber: bigint
    balance: any | number
    acct_type: string
    interest_rate: number
    date_of_creation: Date


    public setBalance(num: number): void {
        this.balance = num;
    }


    
 
}