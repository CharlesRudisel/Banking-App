import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [  
//{ path: '', redirectTo: 'login', pathMatch: 'full' },
{path: '', component:LoginComponent},
{ path: 'main-page', component: MainPageComponent },
{path: 'account-overview', component: AccountOverviewComponent },
{ path: 'account-overview/:id', component: AccountOverviewComponent },
{path: 'registration', component: RegistrationComponent},
{path: 'login', component:LoginComponent}, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//export const routingComponents = [AppComponent, AccountOverviewComponent]
