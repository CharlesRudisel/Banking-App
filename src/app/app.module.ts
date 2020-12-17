import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AcctCardComponent } from './acct-card/acct-card.component';
import { TransferCardComponent } from './transfer-card/transfer-card.component';
import { FooterComponent } from './footer/footer.component';
import { TransactionServiceService } from './transaction-service.service';
import { AccountService } from './account_service';
import { TransactionCardComponent } from './transaction-card/transaction-card.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { TableTwoComponent } from './table-two/table-two.component';
import { TableThreeComponent } from './table-three/table-three.component';
import { TableFourComponent } from './table-four/table-four.component';
import { TableFiveComponent } from './table-five/table-five.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CustomerService } from './customer.service';


@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    AcctCardComponent,
    TransferCardComponent,
    FooterComponent,
    TransactionCardComponent,
    AccountOverviewComponent,
    MainPageComponent,
    LineChartComponent,
    TableTwoComponent,
    TableThreeComponent,
    TableFourComponent,
    TableFiveComponent,
    LoginComponent,
    RegistrationComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [TransactionServiceService, AccountService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
