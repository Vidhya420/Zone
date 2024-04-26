import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerticalComponent } from './vertical/vertical.component';
import { ZoneComponent } from './zone/zone.component';
import { AddEditComponent } from './add-edit/add-edit.component';

const routes: Routes = [

  {path:"zone", component:VerticalComponent}, 
  {path:"zone", component:ZoneComponent},
/*   {path:'router', component:VerticalComponent},
  {path:'',redirectTo:'/router',pathMatch:'full'}, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
