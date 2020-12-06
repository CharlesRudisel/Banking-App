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


@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    AcctCardComponent,
    TransferCardComponent,
    FooterComponent,
    TransactionCardComponent,
    AccountOverviewComponent,
    MainPageComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [TransactionServiceService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
