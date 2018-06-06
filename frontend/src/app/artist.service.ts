import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Entity } from './entity';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(
  	private http: HttpClient, 
  	private configService: ConfigService
  ) { }

  getArtists(): Observable<Entity[]> {
  	// return of(ARTISTS).pipe(tap(data => console.log(data));
  	
  	const url = this.configService.getParam('listUrl').replace(/__what__/, 'artists');

  	// this.http.get(), senza specificare il tipo restituito, restituisce un Observable<Objec>
  	return this.http.get(url, { withCredentials: true, responseType: 'json' }).pipe(
  		tap(data => {}),
  		map((res) => {
            
            // Converto la response che è un'array di stringhe json, in un'array di oggetti.
            let data = []; 
            for (let i in res) {
            	data[i] = JSON.parse(res[i]);
            }
            
        	return data;
        }),
  		catchError(this.handleError('getArtists', []))
  	);
  }

  private handleError<T>(operation: string = 'operation', result?: T) {
  		return (error: any): Observable<T> => {
  			console.error(error);
  			return of(result as T);
  		}
  }


}
