
import { Component, OnInit } from '@angular/core';
import { NavigatorInterface } from 'src/app/models/mediaInterfaces';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  public navigatorInfo: NavigatorInterface;
 
  constructor() {

    this.navigatorInfo = {
      logo: {
        src: "../../../assets/NETFLIX.png",
        alt: "Netflix Logo"
      },
      links: [{
        text: "Inicio",
        link: "#inicio"
      },
      {
        text: "Peliculas",
        link: "#peliculas"
      }, 
      {
        text: "Buscar",
        link: "#buscar"

      }
    ]
    }
  }

  ngOnInit(): void {
  }
}
  