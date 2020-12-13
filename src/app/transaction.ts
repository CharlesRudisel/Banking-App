export class Itransaction{
    transactionNumber: bigint
    description: string
    amount: number
    category: string
    date_of_creation: Date



    constructor(description: string, amount: number, category:string) {
        this.description = description;
        this.amount = amount;
        this.category = category;
      }
}