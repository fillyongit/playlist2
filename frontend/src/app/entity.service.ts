import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Entity } from './entity';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor(
  	private http: HttpClient,
  	private configService: ConfigService
  	) { }

  getEntities(what: string): Observable<Entity[]> {
  	// return of(ARTISTS).pipe(tap(data => console.log(data));
  	const url = this.configService.getParam('listUrl').replace(/__what__/, what);
  	// this.http.get(), senza specificare il tipo restituito, restituisce un Observable<Objec>
  	return this.http.get(url, { withCredentials: true, responseType: 'json' }).pipe(
  		tap(data => {}),
  		map((res) => {
            
            // Converto la response che è un'object di stringhe json, in un'array di oggetti.
            // res è un oggetto non un array in senso stretto.
            let data = []; 
            for (let i in res) {
            	data[i] = JSON.parse(res[i]);
            }
            
        	return data;
        }),
  		catchError(this.handleError('getEntities', []))
  	);
  }

  private handleError<T>(operation: string = 'operation', result?: T) {
  		return (error: any): Observable<T> => {
  			console.error(error);
  			return of(result as T);
  		}
  }
}
