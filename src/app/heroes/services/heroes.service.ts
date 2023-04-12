import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Hero } from "../models/hero.interface";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private _http: HttpClient ) { }

  getHeroes(): Observable<Hero[]> {
    return this._http.get<Hero[]>('http://localhost:3000/heroes');
  }

}
