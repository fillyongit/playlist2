import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './artists/artists.component';
// import { ArtistsComponent } from './artists/artists.component';

const routes: Routes = [
  { path: ':lang/artists', component: ArtistsComponent }
  // , { path: ':lang/artists', component: ArtistsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
