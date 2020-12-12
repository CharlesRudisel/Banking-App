import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Iaccount } from '../account';
import { AccountService } from '../account_service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  title = "Line-Chart"
  chart = [];
  @Input() test_array;
  accounts = []

  constructor(private _accountService: AccountService) { }

  ngOnInit() {

    var balances: Array<Number> = [];
    var labelz: Array<String> = [];

    this._accountService.getAccounts().subscribe(data => {
      this.accounts = data;



      function getBal(account: Iaccount[]) {
        for (let i = 0; i < account.length; i++) {

          if(parseInt(account[i].balance) > 0)
          {

          balances.push(account[i].balance);
          }

          if(parseInt(account[i].balance) <= 0)
          {

          balances.push(0);
          }


        }
        //console.log(balances[0])
        balances;
      }



      function getLabel(account: Iaccount[]) {
        for (let i = 0; i < account.length; i++) {
          labelz.push(account[i].acct_type);
        }
        //console.log(balances[0])
        labelz;
      }

      getLabel(this.accounts)
      getBal(this.accounts)

      var myChart = new Chart("myChart", {
        type: 'doughnut',
        data: {
          labels: labelz,
          datasets: [{

            data: balances,


            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(144,238,144, 0.2)',
              'rgba(255, 255, 0, 0.2)',
              'rgba(167, 12, 255, 0.2)'  


            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
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