import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponentComponent } from './list-todos-component/list-todos-component.component';


const routes: Routes = [
  {path:'', component : LoginComponent},
{path : 'login', component : LoginComponent},
{path : 'welcome/:name', component : WelcomeComponent},
{path : 'listTodos', component : ListTodosComponentComponent},
{path : '**', component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
