import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {
  heroes: string[] = ['spiderman' , 'Ironman' , 'hulk' , 'thor', 'goku']
  borrados: string[] = []

  borrarHeroe() {
    const heroesBorrado = this.heroes.shift() || '';
    console.log(heroesBorrado);
    return this.borrados.push(heroesBorrado)
  }
}
