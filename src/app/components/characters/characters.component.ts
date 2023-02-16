import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.service';
import { Observable } from 'rxjs'
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  
  constructor(private marvelSvc:MarvelService, private router:Router, public auth: AuthService){}

  characters?:Observable<any>;


  ngOnInit(){

    this.getAllCharacters();
    
  }

  getAllCharacters(){
    this.characters = this.marvelSvc.getCharacters();
  }

  getCharacter(id:string){
    this.router.navigate(['/character', id]);
  }

}
