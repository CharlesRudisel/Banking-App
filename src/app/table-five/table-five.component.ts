import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

import { Iaccount } from '../account';
import { AccountService } from '../account_service';
import { Itransaction } from '../transaction';
import { TransactionServiceService } from '../transaction-service.service';

@Component({
  selector: 'app-table-five',
  templateUrl: './table-five.component.html',
  styleUrls: ['./table-five.component.scss']
})
export class TableFiveComponent implements OnInit {

  title = "Line-Chart"
  chart = [];
  //@Input() test_array;
  accounts = []
  transactions = []
  @Input() acct_num: string;


  constructor(private _accountService: AccountService, private _transService: TransactionServiceService) { }




  ngOnInit() {

    var IncomeArray: Array<Number> = [];
    var ExpenseArray: Array<Number> = [];
    var balances: Array<Number> = [];


    this._transService.getTransactions(this.acct_num).subscribe(data => {
      this.transactions = data;


      //console.log(this.transactions.length);

      function getTrans(transaction: Itransaction[]) {

        let x: number;
        let y: number;

        for (let i = 0; i < transaction.length; i++) {



          if (parseInt(transaction[i].amount.toString()) > 0) {

            //console.log('greater')
            x = Math.abs(parseInt(transaction[i].amount.toString()))
            IncomeArray.push(x);
          }

          if (parseInt(transaction[i].amount.toString()) < 0) {


            y = Math.abs(parseInt(transaction[i].amount.toString()))
            ExpenseArray.push(y);

          }
          

        }

        let sum1 = IncomeArray.reduce((a, b) => parseInt(a.toString()) + parseInt(b.toString()), 0);
        let sum2 = ExpenseArray.reduce((a, b) => parseInt(a.toString()) + parseInt(b.toString()), 0);
        balances.push(sum1);
        balances.push(sum2);
        return balances;
      }



      getTrans(this.transactions)

      var myChart = new Chart("myChart", {
        type: 'doughnut',
        data: {
          labels: ['Income', 'Expenses'],
          datasets: [{

            data: balances,


            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(144,238,144, 0.2)',
              'rgba(255, 255, 0, 0.2)',
              'rgba(167, 12, 255, 0.2)'


            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(144,238,144, 1)',
              'rgba(255, 255, 0, 1)',
              'rgba(167, 12, 255, 1)'
            ],
            //borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          //maintainAspectRatio: false,

          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });



    });


  }


}