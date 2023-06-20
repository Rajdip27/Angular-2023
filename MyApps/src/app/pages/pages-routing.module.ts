import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
path:'',
component:PagesComponent,
children:[
  {
    path:'home',
    loadChildren:()=>import('./home/home.module').then((m)=>m.HomeModule)

  },
  {
    path:'about',
    loadChildren:()=>import('./about/about.module').then((m)=>m.AboutModule)

  },
  {
    path:'service',
    loadChildren:()=>import('./service/service.module').then((m)=>m.ServiceModule)

  },

]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
