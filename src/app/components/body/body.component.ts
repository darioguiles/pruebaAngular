import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [NgIf,NgFor], //Los imports del HTML van aquí pero si son de clase solo arriba
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  mostrar:boolean= true;

  lista:String[] = ["Dario","Daniel","Fernando","Lucas","Miguel"];

mostrarOcultar(){
  this.mostrar = !this.mostrar;
}

borrarElemento(num:number){

}
}
