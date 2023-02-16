import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MarvelService {

apiMarvel= 'https://gateway.marvel.com:443/v1/public';
public_key= 'e903e870f606ad2ccb374493a3547cf9';
hash= 'bf82452e28e60fc8df179fa961708050';

  constructor(private http:HttpClient) { }

  getCharacters():Observable<any>{
    return this.http.get<any>(`${this.apiMarvel}/characters?ts=1&apikey=${this.public_key}&hash=${this.hash}`).pipe(map((data:any)=>data.data.results));
    
  }

  getCharacter(id:string):Observable<any>{
    return this.http.get<any>(`${this.apiMarvel}/characters/${id}?ts=1&apikey=${this.public_key}&hash=${this.hash}`).pipe(map((data:any)=>data.data.results));
    
  }

  

 
}
