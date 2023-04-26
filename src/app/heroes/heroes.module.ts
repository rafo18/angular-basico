import { NgModule } from "@angular/core";
import { HeroeComponents } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    HeroeComponents,
    ListadoComponent
  ],
  exports: [
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule {}
