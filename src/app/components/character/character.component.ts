import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  idCharacter='';
  character:any={};
  
  
  constructor(private marvelSvc: MarvelService ,private activatedRoute:ActivatedRoute) {

    this.activatedRoute.params.subscribe(params=>{
      this.idCharacter = params['id'];
    })

  }

  ngOnInit() {    
    this.getIdCharacter();
  }

  getIdCharacter(){
    this.marvelSvc.getCharacter(this.idCharacter).subscribe({

      next:(res)=>{   
        
        let dataCharacter={

          name:res[0].name,
          description:res[0].description,
          thumbnailPath:res[0].thumbnail.path,
          thumbnailExtension:res[0].thumbnail.extension

        };

        this.character = dataCharacter;

        console.log(this.character);
        
      },
      
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

}
