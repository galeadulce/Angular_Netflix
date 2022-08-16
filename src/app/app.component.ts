import { FilmsInterface } from './models/mediaInterfaces';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public filmsInfo: FilmsInterface= {
    title: "Cine Animado",
    films: [{
      src: "../../../assets/animado/bichos.jpg",
      alt: "bichos cover"
    },
    {
      src: "../../../assets/animado/big hero.jpg",
      alt: "big hero cover"
    },
    {
      src: "../../../assets/animado/inside out.jpg",
      alt: "inside out cover"
    },
    {
      src: "../../../assets/animado/isla de perros.jpg",
      alt: "isla de perros cover"
    },
    {
      src: "../../../assets/animado/Soul_Poster.webp",
      alt: "soul cover"
    },
    {
      src: "../../../assets/animado/brave.jpg",
      alt: "brave cover"
    }, {
      src: "../../../assets/animado/luca.webp",
      alt: "luca cover"
    }, {
      src: "../../../assets/animado/rio.jpg",
      alt: "rio cover"
    }
    ]
  };

  public spainInfo: FilmsInterface= {
    title: "Cine Español",
    films: [{
      src: "../../../assets/español/7años.jpg",
      alt: "7 años cover"
    },
    {
      src: "../../../assets/español/campeones.jpg",
      alt: "campeones cover"
    },
    {
      src: "../../../assets/español/catalanes.jpg",
      alt: "ocho apellidos catalanes cover"
    },
    {
      src: "../../../assets/español/feos.jpg",
      alt: "que se mueran los feos cover"
    },
    {
      src: "../../../assets/español/latribu.jpg",
      alt: "latribu cover"
    }
    , {
      src: "../../../assets/español/toctoc.jpg",
      alt: "toctoc cover"
    }, {
      src: "../../../assets/español/truman.jpg",
      alt: "trumancover"
    },{
      src: "../../../assets/español/vascos.jpg",
      alt: "ocho apellidos vascos cover"
    }]
  };
  public ficcionInfo: FilmsInterface= {
    title: "Ciencia Ficción",
    films: [{
      src: "../../../assets/ficcion/batman.jpg",
      alt: "batman cover"
    },
    {
      src: "../../../assets/ficcion/dune.jpg",
      alt: "dune cover"
      
    },
    {
      src: "../../../assets/ficcion/exmachina.jpg",
      alt: "exmachine cover"
    },
    {
      src: "../../../assets/ficcion/interstellar.jpg",
      alt: "interstellar cover"
    },
    {
      src: "../../../assets/ficcion/juegoender.jpg",
      alt: "juegos de ender cover"
    },
    {
      src: "../../../assets/ficcion/limitless.jpg",
      alt: "sin limites cover"
    }, {
      src: "../../../assets/ficcion/marte.jpg",
      alt: "marte cover"
    }, {
      src: "../../../assets/ficcion/simios.jpg",
      alt: "simios cover"
    }]
  };
  public romanticaInfo: FilmsInterface= {
    title: "Comedia Romantica",
    films: [
    {
      src: "../../../assets/romantica/begin.jpg",
      alt: "begin again cover"
      
    },
    {
      src: "../../../assets/romantica/BIG.jpg",
      alt: "big cover"
    },
    {
      src: "../../../assets/romantica/blended.jpg",
      alt: "blendedcover"
    },
    {
      src: "../../../assets/romantica/eterno_resplandor.jfif",
      alt: "eterno resplando de una mente sin recuerdos cover"
    },
    {
      src: "../../../assets/romantica/Si.jpg",
      alt: "SI cover"
    }, {
      src: "../../../assets/romantica/the_terminal.jpg",
      alt: "cover"
    }, {
      src: "../../../assets/romantica/TrumanShow.jpg",
      alt: "the truman show cover"
    },{
      src: "../../../assets/romantica/ventajas.jfif",
      alt: "ventajas de ser invisible cover"
    }]
  };


}

