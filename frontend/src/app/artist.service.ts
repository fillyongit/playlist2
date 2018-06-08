import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EntityService } from './entity.service';
import { Observable } from 'rxjs';
import { Artist } from './artist';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(
  	private configService: ConfigService, 
  	private entityService: EntityService
  ) { }

  getArtists(): Observable<Artist[]> {
  	return this.entityService.getEntities('artists');
  }
}
