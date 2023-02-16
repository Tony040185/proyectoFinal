import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

apiMarvel= 'https://gateway.marvel.com:443/v1/public';
public_key= 'e903e870f606ad2ccb374493a3547cf9';
hash= 'bf82452e28e60fc8df179fa961708050';

  constructor(private http:HttpClient) { }

  getComics():Observable<any>{
    return this.http.get<any>(`${this.apiMarvel}/comics?ts=1&apikey=${this.public_key}&hash=${this.hash}`).pipe(map((data:any)=>data.data.results));
    
  }

  getComic(id:string):Observable<any>{
    return this.http.get<any>(`${this.apiMarvel}/comics/${id}?ts=1&apikey=${this.public_key}&hash=${this.hash}`).pipe(map((data:any)=>data.data.results));
    
  }

}
