import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegistrationComponent
},
{
  path: 'courses',
  component: CoursesComponent,
  canActivate: [AuthGuard]
},
{
  path: '',
  redirectTo: '/courses',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
];
