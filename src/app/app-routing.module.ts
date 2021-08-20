import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DownloadComponent } from './download/download.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'innermenu',
    loadChildren: () => import('./inner-menu/inner-menu.module').then(m => m.InnerMenuModule),
  },
  {
    path: 'innertabmenu',
    loadChildren: () => import('./inner-tab-menu/inner-tab-menu.module').then(m => m.InnerTabMenuModule),
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
