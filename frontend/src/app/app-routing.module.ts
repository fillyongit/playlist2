import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './artists/artists.component';
// import { ArtistsComponent } from './artists/artists.component';

const routes: Routes = [
  { path: 'artists', component: ArtistsComponent }
  // { path: ':lang/artists', component: ArtistsComponent }
  // , { path: ':lang/artists', component: ArtistsComponent }
  // , { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
