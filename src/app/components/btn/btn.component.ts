import { Component, Input } from '@angular/core';

type btnVariant = 'primary' | 'secondary'

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
  @Input("btn-text") text : string = ''
  @Input() disabled : boolean = false
  @Input() styleVariant : btnVariant = 'primary'
}
