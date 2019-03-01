import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'services', loadChildren: './pages/services/services.module#ServicesPageModule' },
  { path: 'experience', loadChildren: './pages/experience/experience.module#ExperiencePageModule' },
  { path: 'blog', loadChildren: './pages/blog/blog.module#BlogPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
