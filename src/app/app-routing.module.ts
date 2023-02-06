import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {AddpenggunaComponent} from "./addpengguna/addpengguna.component";
import {HakaksesComponent} from "./hakakses/hakakses.component";
import {AddhakaksesComponent} from "./addhakakses/addhakakses.component";

const routes: Routes = [
  {
  path:"", component:HomeComponent
  },
  {
    path:"about", component:AboutComponent
  },
  {
    path:"add-pengguna", component: AddpenggunaComponent
  },
  {
    path:"edit-pengguna/:id", component: AddpenggunaComponent
  },
  {
    path:"hak", component: HakaksesComponent
  },
  {
    path:"add-hak", component: AddhakaksesComponent
  },
  {
    path:"edit-hak/:id", component: AddhakaksesComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
