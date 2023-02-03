import { Component } from '@angular/core';

import { gente } from './gente.name';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name_vengodecomponents = 'nicolas';
  public age = 18;
  public cat ='https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg'
  public btnDisable=true;
  public togglebutton(){
    this.btnDisable =!this.btnDisable
  }
  public increase(){
    this.persona.edad +=1
  }
  public onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  public changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.persona.nombre = element.value;
  }
  public persona = {
    nombre: "andres",
    edad: 65,
    imagen: 'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg'

  }
  public names: string[] =['a','b','c','d'];
  public newName = "";

  public addName() {
    this.names.push(this.newName);
    this.newName = '';
  }
  public deleteName(index: number) {
    this.names.splice(index, 1);
  }

  public people: gente[] = [
    {
        firstname: 'Freddy',
        lastname: 'Vega',
        age: 35,
        imagen: './assets/images/mont1.jpg'
    },
    {
        firstname: 'Nicolas',
        lastname: 'Molina',
        age: 29,
        imagen: './assets/images/mont2.jpg'
    },
    {
        firstname: 'Ángela',
        lastname: 'Ocando',
        age: 30,
        imagen: './assets/images/mont3.jpg'
    }
  ];
}

