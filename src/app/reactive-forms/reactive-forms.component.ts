import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../persona';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
  personas:Persona[] = []
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.userForm = this.formBuilder.group({

      nombre: this.formBuilder.control('',[Validators.required, Validators.maxLength(50)]), 

      apellido: this.formBuilder.control('', [Validators.required, Validators.maxLength(50)]), 

      email: this.formBuilder.control('', [Validators.required, Validators.email]), 

      contrasena: this.formBuilder.control('', [Validators.required, Validators.maxLength(10)]),

    })

  } 
  get nombreForm(){
    return  this.userForm.controls['nombre'].value
  }
  get apellidoForm(){
    return  this.userForm.controls['apellido'].value
  }
  get emailForm(){
    return  this.userForm.controls['email'].value
  }
  get contrasenaForm(){
    return  this.userForm.controls['contrasena'].value
  }





  onSubmit(): void{

    this.personas.push (new Persona(this.nombreForm, this.apellidoForm, this.emailForm, this.contrasenaForm))
    this.userForm.reset();

  }
}
