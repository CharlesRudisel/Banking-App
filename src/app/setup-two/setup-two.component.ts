import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-setup-two',
  templateUrl: './setup-two.component.html',
  styleUrls: ['./setup-two.component.scss']
})
export class SetupTwoComponent implements OnInit {

  array = [];
  status: boolean = true;
  counter = 0;
  public acct_details;
  arrayOfValues: Array<string>;
  number_of_trans: number;
  buttonDisabled: boolean = true;
  


  

  
  clickEvent(index:number){
      //this.status = !this.status;   
      this.array[index] = !this.array[index];  
      if(this.array[index] == false){
        this.counter += 1;
      }
      if(this.array[index] == true){
        this.counter -= 1;
      }
      if(this.counter >= this.number_of_trans){
        this.buttonDisabled = false;
      }
      if(this.counter < this.number_of_trans){
        this.buttonDisabled = true;
      }
      console.log(this.counter) ;
  }

  constructor(private router: Router, private route: ActivatedRoute) {

   
    
   }

   

  ngOnInit(): void {

    const myArray = this.route.snapshot.queryParamMap.get('myArray');
    if (myArray === null) {
      this.arrayOfValues = new Array<string>();
    } else {
      this.arrayOfValues = JSON.parse(myArray);
    }
  
    for (let i = 0; i < 39; i++) {
      this.array.push(this.status)
    }
    console.log(this.arrayOfValues);

    
   // console.log(this.array)

    if(this.arrayOfValues.length == 2){
      this.number_of_trans = 7
    }
    if(this.arrayOfValues.length == 3){
      this.number_of_trans = 14
    }
    if(this.arrayOfValues.length == 4){
      this.number_of_trans = 21
    }
  }


  onSelect(){

        
    if(this.array[0]== false){
      this.arrayOfValues.push("Nike Store : Retail");
    }
    if(this.array[1]== false){
      this.arrayOfValues.push("Rent : Living");
    }
    if(this.array[2]== false){
      this.arrayOfValues.push("Car Payment : Living");
    }
    if(this.array[3]== false){
      this.arrayOfValues.push("YouTube Tv : Entertainment");
    }
    if(this.array[4]== false){
      this.arrayOfValues.push("Netflix: Entertainment");
    }
    if(this.array[5]== false){
      this.arrayOfValues.push("Hulu : Entertainment");
    }
    if(this.array[6]== false){
      this.arrayOfValues.push("Disney + : Entertainment");
    }
    if(this.array[7]== false){
      this.arrayOfValues.push("Publix Groccery : Groccery");
    }
    if(this.array[8]== false){
      this.arrayOfValues.push("Walmart : Groccery");
    }
    if(this.array[9]== false){
      this.arrayOfValues.push("CVS : Retail");
    }
    if(this.array[10]== false){
      this.arrayOfValues.push("Walgreens : Retail");
    }
    if(this.array[11]== false){
      this.arrayOfValues.push("Home Depot : Retail");
    }
    if(this.array[12]== false){
      this.arrayOfValues.push("Lowes : Retail");
    }
    if(this.array[13]== false){
      this.arrayOfValues.push("Subway Resturaunt : Food");
    }
    if(this.array[14]== false){
      this.arrayOfValues.push("T-Mobile : Retail");
    }
  
    if(this.array[15]== false){
      this.arrayOfValues.push("Target : Retail");
    }
    if(this.array[16]== false){
      this.arrayOfValues.push("PF Chang's : Food"); //====
    }
    if(this.array[17]== false){
      this.arrayOfValues.push("Starbucks : Food");
    }
    if(this.array[18]== false){
      this.arrayOfValues.push("Car Insurance : Living");
    }
    if(this.array[19]== false){
      this.arrayOfValues.push("Fiver Payment : Income");
    }
    if(this.array[20]== false){
      this.arrayOfValues.push("Paycheck : Income");
    }
    if(this.array[21]== false){
      this.arrayOfValues.push("Car Insurance : Living");
    }
    if(this.array[22]== false){
      this.arrayOfValues.push("Cash Widthdrawl : Widthdrawl");
    }
    if(this.array[23]== false){
      this.arrayOfValues.push("Cash Deposit : Deposit");
    }
    if(this.array[24]== false){
      this.arrayOfValues.push("Interest Payment : Deposit");
    }
    if(this.array[25]== false){
      this.arrayOfValues.push("Dentistry : Medical");
    }
    if(this.array[26]== false){
      this.arrayOfValues.push("Orthodontist : Medical");
    }
    if(this.array[27]== false){
      this.arrayOfValues.push("Payroll : Income");
    }
    if(this.array[28]== false){
      this.arrayOfValues.push("Cash Widthdrawl : Widthdrawl");
    }
    if(this.array[29]== false){
      this.arrayOfValues.push("GoDaddy.com : Other");
    }
    if(this.array[30]== false){
      this.arrayOfValues.push("Adobe.com : Other");
    }
    if(this.array[31]== false){
      this.arrayOfValues.push("DoorDash : Food");
    }
    if(this.array[32]== false){
      this.arrayOfValues.push("Udemy : Other");
    }
    if(this.array[33]== false){
      this.arrayOfValues.push("Zoom.us : Other");
    }
    if(this.array[34]== false){
      this.arrayOfValues.push("Apple.com : Retail");
    }
    if(this.array[35]== false){
      this.arrayOfValues.push("Google.com : Other");
    }
    if(this.array[36]== false){
      this.arrayOfValues.push("Venmo : Other");
    }
    if(this.array[37]== false){
      this.arrayOfValues.push("Cash App : Other");
    }
    if(this.array[38]== false){
      this.arrayOfValues.push("The Ups Store : Retail");
    }
  
    
    this.arrayOfValues.push(this.counter.toString());

    const queryParams: any = {};
    queryParams.myArray = JSON.stringify(this.arrayOfValues);

    const navigationExtras: NavigationExtras = {
      queryParams
    };

    this.router.navigate(['/setup_three'], navigationExtras)
  }

}
