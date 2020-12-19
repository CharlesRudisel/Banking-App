import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-three',
  templateUrl: './setup-three.component.html',
  styleUrls: ['./setup-three.component.scss']
})
export class SetupThreeComponent implements OnInit {

  array = [];
  status: boolean = true;
  counter = 0;

  

  clickEvent(index:number){
      //this.status = !this.status;   
      this.array[index] = !this.array[index];  
      if(this.array[index] == false){
        this.counter += 1;
      }
      if(this.array[index] == true){
        this.counter -= 1;
      }
      console.log(this.counter) ;
  }

  constructor() { }

  ngOnInit(): void {

    for (let i = 0; i < 39; i++) {
      this.array.push(this.status)
    }
    //console.log(this.array);
  }

}