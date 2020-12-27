import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AccountService } from '../account_service';
import { Itransaction } from '../transaction';
import { TransactionServiceService } from '../transaction-service.service';

@Component({
  selector: 'app-table-three',
  templateUrl: './table-three.component.html',
  styleUrls: ['./table-three.component.scss']
})
export class TableThreeComponent implements OnInit {

  title = "Line-Chart"
  chart = [];
  //@Input() test_array;
  accounts = []
  transactions = []
  @Input() acct_num: string;


  constructor(private _accountService: AccountService, private _transService: TransactionServiceService) { }

  ngOnInit() {


    var balances: Array<Number> = [];
    var cats: Array<String> = [];
    var amounts: Array<Number> = [];


    this._transService.getTransactions(this.acct_num).subscribe(data => {
      this.transactions = data;

      function getLabels(transaction: Itransaction[]) {

        for (let i = 0; i < transaction.length; i++) {

          if (!cats.includes(transaction[i].category)) {
            cats.push(transaction[i].category)
          }

        }

      }
      //==================================================================================================  
      var counts = {};

      this.transactions.forEach(function (o) {
        // add the type to the hash if it is missing;
        // set initial count to 0
        if (!counts.hasOwnProperty(o.category)) {
          counts[o.category] = 0;
        }
        // increment the count based on the type
        counts[o.category] += 1;
      });

      //==================================================================================================
      for (var key in counts) {
        if (counts.hasOwnProperty(key)) {
          // console.log(key + " -> " + counts[key]);
          balances.push(counts[key])
        }
      }


      //==================================================================================================

      getLabels(this.transactions);
     


      for(let a=0; a < cats.length; a++){
        
       let adder = 0;

        for(let b=0; b < this.transactions.length; b++){

          if(this.transactions[b].category == cats[a]){
           // console.log(this.transactions[b].description + "  " + cats[a])
            adder = Math.abs(adder) + Math.abs(this.transactions[b].amount)
            //console.log(adder)
          }
        }
          amounts.push(adder);
      } 

      console.log(amounts)

      var myChart = new Chart("myChart3", {
        type: 'pie',
        data: {
          labels: cats,
          datasets: [{

            data: amounts,


            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(144,238,144, 0.2)',
              'rgba(255, 255, 0, 0.2)',
              'rgba(167, 12, 255, 0.2)',
              'rgba(127, 140, 141  , 0.2)',
              'rgba(214, 15, 234, 0.2)',
              'rgba(197, 208, 214, 0.2)',
              'rgba(8, 234, 165, 0.2)',
              'rgba(181, 187, 76, 0.2)',
            ],

            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(144,238,144, 1)',
              'rgba(255, 255, 0, 1)',
              'rgba(167, 12, 255, 1)',
              'rgba(127, 140, 141 , 1)',
              'rgba(214, 15, 234, 1)',
              'rgba(197, 208, 214, 1)',
              'rgba(8, 234, 165, 1)', 
              'rgba(181, 187, 76, 1)',
            ],
            borderWidth: 1
          }]
        },
        options: {
          legend: {
            display: false,
          },
          responsive: true,
          //maintainAspectRatio: false,
          title: {
            display: true,
            text: '$ Amount Per Category'
          },
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