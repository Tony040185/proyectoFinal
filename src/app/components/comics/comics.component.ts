import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private comicsSvc:ComicsService, private router: Router ){}

  comics?:Observable<any>;
  
  
  ngOnInit() {

    this.getAllComics();
    
  }

  getAllComics(){
    this.comics = this.comicsSvc.getComics();
  
    
  }
  

}
