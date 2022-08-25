import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogincComponent } from './loginc/loginc.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationcComponent } from './registrationc/registrationc.component';

const routes: Routes = [
  { path: '', component: LogincComponent },
  { path: 'loginsuccess', component: LoginsuccessComponent },
  { path: 'registration', component: RegistrationcComponent },
  { path: 'login', component: LogincComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
