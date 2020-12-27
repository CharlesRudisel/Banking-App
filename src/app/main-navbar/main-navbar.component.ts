import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  @Input() test_array: any[];

  constructor(private router: Router) { }

  ngOnInit(): void {

   
  }

 

  onSelect(){

    function myFunction() {
      alert("You already have the maximum number of accounts");
    }

    if(this.test_array.length < 3){

      this.router.navigate(['/setup_one'])
    }
    else 
    {
      myFunction()
    }
  }

}
