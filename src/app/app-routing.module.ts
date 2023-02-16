import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ComicsComponent } from './components/comics/comics.component';
import { GuardOneGuard } from './security/guard-one.guard';


const routes: Routes = [
  {path: 'characters', component:CharactersComponent},
  {path: 'character/:id', component:CharacterComponent, canActivate:[GuardOneGuard]},
  {path: 'comics', component:ComicsComponent, canActivate:[GuardOneGuard]},   
  {path: '', pathMatch:'full', redirectTo:'/characters'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule,HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
