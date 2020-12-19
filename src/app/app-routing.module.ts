import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { SetupOneComponent } from './setup-one/setup-one.component';
import { SetupThreeComponent } from './setup-three/setup-three.component';
import { SetupTwoComponent } from './setup-two/setup-two.component';

const routes: Routes = [  
//{ path: '', redirectTo: 'login', pathMatch: 'full' },
{path: '', component:LoginComponent},
{ path: 'main-page', component: MainPageComponent },
{path: 'account-overview', component: AccountOverviewComponent },
{ path: 'account-overview/:id', component: AccountOverviewComponent },
{path: 'registration', component: RegistrationComponent},
{path: 'login', component:LoginComponent}, 
{path: 'setup_one', component:SetupOneComponent},
{path: 'setup_two', component:SetupTwoComponent},
{path: 'setup_three', component:SetupThreeComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//export const routingComponents = [AppComponent, AccountOverviewComponent]
