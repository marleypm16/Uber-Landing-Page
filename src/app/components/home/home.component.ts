import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BtnComponent } from '../btn/btn.component';
import { FormComponent } from '../form/form.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,NgOptimizedImage,CommonModule,BtnComponent,FormComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
