import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponentComponent } from './list-todos-component/list-todos-component.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
{path:'', component : LoginComponent},
{path : 'login', component : LoginComponent},
{path : 'welcome/:name', component : WelcomeComponent, canActivate : [RouteGuardService]},
{path : 'listTodos', component : ListTodosComponentComponent, canActivate : [RouteGuardService]},
{path : 'logout', component : LogoutComponent, canActivate : [RouteGuardService]},
{path : 'todos/:id', component : TodoComponent, canActivate : [RouteGuardService]},
{path : '**', component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
