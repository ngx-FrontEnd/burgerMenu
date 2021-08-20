import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InnerMenuComponent } from './inner-menu.component';
import { MaterialModel } from '../material.module';
import { InnerSidenavComponent } from './sidenav/sidenav.component';
import { InnerHeaderComponent } from './header/header.component';
import { InnerHomeComponent } from './inner-home/inner-home.component';
// import { InnerMenuRouting } from './inner-menu.routing';

import { RouterModule, Routes } from '@angular/router';
import { InnerAboutComponent } from './inner-about/inner-about.component';

const routes: Routes = [
  {
    path: '', component: InnerMenuComponent,
    children: [

      { path: '', component: InnerHomeComponent },
      { path: 'innerabout', component: InnerAboutComponent },
    ]
  }
  // { path: '', redirectTo: '/innerhome', pathMatch: 'full' },

];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialModel,
    // InnerMenuRouting
  ],
  declarations: [InnerMenuComponent, InnerSidenavComponent, InnerHeaderComponent, InnerHomeComponent]
})
export class InnerMenuModule {
  constructor() {
    console.log("Inner Menu");

  }
}
