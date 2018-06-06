import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artist } from './artist';
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

  getArtists(): Observable<Artist[]> {
  	// return of(ARTISTS).pipe(tap(data => console.log(data));
  	const url = this.configService.getParam('listUrl').replace(/__what__/, 'artists');
  	return this.http.get<Artist[]>(url, { withCredentials: true, responseType: 'json' }).pipe(
  		tap(data => {console.log(data)}),
  		/*
  		map((res) => {
  			console.log(res);
            // Converto la response che è un'array di stringhe json, in un'array di oggetti.
            let data = []; 
            res.forEach((el, i) => {
            	data[i] = JSON.parse(el);
            });
        	return data;
        }),*/
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
