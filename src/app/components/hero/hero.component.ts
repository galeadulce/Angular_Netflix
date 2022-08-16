import { Component, OnInit } from '@angular/core';
import { HeroInterface } from 'src/app/models/mediaInterfaces';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  public heroInfo: HeroInterface;
  public numBi:number= 1;

  constructor() {
    
    this.heroInfo = {
      title: 'Más Populares en Netflix',
      films: [
        {
          src: '../../../assets/populares/intime.jpg',
          alt: 'in time cover',
        },

        {
          src: '../../../assets/populares/themangrey.jfif',
          alt: 'the man grey cover',
        },

        {
          src: '../../../assets/populares/whiplash.jpg',
          alt: 'whiplash cover',
        },
        {
          src: '../../../assets/populares/007.jpg',
          alt: '007 cover',
        },
        {
          src: '../../../assets/populares/matilda.jpg',
          alt: 'Matilda cover',
        },
      ],
    };
  }

  ngOnInit(): void {}
}
