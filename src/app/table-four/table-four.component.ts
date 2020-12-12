import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-table-four',
  templateUrl: './table-four.component.html',
  styleUrls: ['./table-four.component.scss']
})
export class TableFourComponent implements OnInit {

  title = "Line-Chart"
  chart = [];

  constructor() { }

  ngOnInit() {

    var myChart = new Chart("myChart4", {
      type: 'line',
      data: {
          labels: ['Checking', 'Savings', 'Credit'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(144,238,144, 0.2)'
                  
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(144,238,144, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        responsive: true,
      
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }

}

