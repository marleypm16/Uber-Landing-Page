import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [BtnComponent,ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form : FormGroup
  constructor(){
    this.form = new FormGroup(
      {
      partida : new FormControl("",Validators.required),
      destino : new FormControl("",Validators.required)
  
    }
  )
  }

  
    
}
