import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InnerHomeComponent } from './inner-home/inner-home.component';
import { InnerMenuComponent } from './inner-menu.component';

const routes: Routes = [
  { path: '', component: InnerMenuComponent },
  { path: 'innerhome', component: InnerHomeComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnerMenuRouting { }
