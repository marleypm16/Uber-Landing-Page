import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Btn } from '../../btn';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage,BtnComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //vê se vale a pena criar um componente de botão
}
