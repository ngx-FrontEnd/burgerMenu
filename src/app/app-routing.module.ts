import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InnerMenuModule } from './inner-menu/inner-menu.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'innermenu',
    loadChildren: () => import('./inner-menu/inner-menu.module').then(m => m.InnerMenuModule),
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
