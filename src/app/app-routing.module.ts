import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [  
{ path: '', redirectTo: '/main-page', pathMatch: 'full' },
{ path: 'main-page', component: MainPageComponent },
{path: 'account-overview', component: AccountOverviewComponent },
{ path: 'account-overview/:id', component: AccountOverviewComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//export const routingComponents = [AppComponent, AccountOverviewComponent]
