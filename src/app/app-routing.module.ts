import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

	{
		path: 'index',
		component: UsersComponent
	},

	{
		path: 'edit/:id',
		component: EditUserComponent
	},

	{
		path: 'login',
		component: LoginComponent
	},

	{
		path: 'create',
		component: NewUserComponent
	},

	{
		path: '',
		redirectTo: 'index',
		pathMatch: 'full'
	}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
