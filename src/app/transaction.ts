export class Itransaction{
    transactionNumber: bigint
    description: string
    amount: number
    date_of_creation: Date



    constructor(description: string, amount: number) {
        this.description = description;
        this.amount = amount;
      }
}