import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BtsComponent } from './bts/bts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Page404Component } from './page404/page404.component';
// import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'bts', component: BtsComponent},
  // { path: 'blog', component: BlogComponent},
  { path: 'gallery', component: GalleryComponent},
  {path: '**', component:Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
