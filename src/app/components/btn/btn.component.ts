import { Component, Input } from '@angular/core';
import { Btn } from '../../btn';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
  @Input() btn!: Btn;
}
