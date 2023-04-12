import { Component, Input } from '@angular/core';
import {Hero} from "../../models/hero.interface";

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [`
    img {
      width: ;
    }
  `
  ]
})
export class HeroCardComponent {

  @Input() hero!: Hero;

}
