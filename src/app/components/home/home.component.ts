import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Btn } from '../../btn';
import { BtnComponent } from '../btn/btn.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,NgOptimizedImage,CommonModule,BtnComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  button : Btn[] = [
    //Button white
    { 
      text : 'Ver preços',
  
    },
  //Button black
  {
    text:'Começar',
  }
]
}
