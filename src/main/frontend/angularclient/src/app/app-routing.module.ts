import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "./user-list/user-list.component";
import {UserFormComponent} from "./user-form/user-form.component";

//This directs which components to display when a link is clicked or a url is given
//'path' is the string that matches the URL, component is the component that will be created in that case
//e.g. /users will display UserListComponent
const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'adduser', component: UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
