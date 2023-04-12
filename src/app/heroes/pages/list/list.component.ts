import { Component, OnInit } from '@angular/core';

import { HeroesService } from "../../services/heroes.service";
import {Hero} from "../../models/hero.interface";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit{

  heroes: Hero[] = [];


  constructor( private _heroesService: HeroesService ) {}

  ngOnInit() {
    this._heroesService.getHeroes()
      .subscribe( heroes => {
        this.heroes = heroes;
    });
  }

}
