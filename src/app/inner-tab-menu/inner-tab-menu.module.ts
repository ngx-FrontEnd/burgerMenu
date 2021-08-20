import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TabMenuComponent } from './tab-menu.component';
import { MaterialModel } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


const routes: Routes = [
  {
    path: '', component: TabMenuComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'innertabhome', component: HomeComponent },
      { path: 'innertababout', component: AboutComponent },
    ]
  }
  // { path: '', redirectTo: '/innerhome', pathMatch: 'full' },

];


@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    TabMenuComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialModel,
    FlexLayoutModule
  ]
})
export class InnerTabMenuModule { }
