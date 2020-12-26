import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-setup-one',
  templateUrl: './setup-one.component.html',
  styleUrls: ['./setup-one.component.scss']
})
export class SetupOneComponent implements OnInit {

  array = [];
  status: boolean = true;
  counter = 0;
  acct_array = [];
  public email;
  

//=====================================================================================
  clickEvent(index:number){
      //this.status = !this.status;   
      this.array[index] = !this.array[index];  
      if(this.array[index] == false){
        this.counter += 1;
      }
      if(this.array[index] == true){
        this.counter -= 1;
      }
      //console.log(this.email);
      //console.log(this.counter) ;  
  }
//=====================================================================================


  constructor(private router: Router, private route: ActivatedRoute) {
    
   
  }


  //=====================================================================================

  ngOnInit(): void {

    
    
    let id = this.route.snapshot.paramMap.get('id');
    this.email = id;
    console.log(this.email)
    
    this.array.push(this.email)

    for (let i = 0; i < 3; i++) {
      this.array.push(this.status);
      
    }
    this.acct_array.push(this.email);
    console.log(this.array);
  }

//=====================================================================================

  onSelect(){

    
    if(this.array[0]== false){
      this.acct_array.push("checking");
    }
    if(this.array[1]== false){
      this.acct_array.push("savings");
    }
    if(this.array[2]== false){
      this.acct_array.push("credit card");
    }

    const queryParams: any = {};
    queryParams.myArray = JSON.stringify(this.acct_array);

    const navigationExtras: NavigationExtras = {
      queryParams
    };

    this.router.navigate(['/setup_two'], navigationExtras)
  }

}