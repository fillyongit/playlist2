import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsComponent } from './songs/songs.component';
// import { ArtistsComponent } from './artists/artists.component';

const routes: Routes = [
  { path: ':lang/songs', component: SongsComponent }
  // , { path: ':lang/artists', component: ArtistsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
