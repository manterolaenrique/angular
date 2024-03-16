import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  checkoutForm;
  usuario!: Usuario;
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService
  ) {
    this.checkoutForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      // email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.min(6),])
    })
  }

  ngOnInit(): void {
  }

  agregarInforme(checkoutForm: any): void {
    console.log(checkoutForm);
    if (this.checkoutForm.valid) {
      this.loginService.login_usuario(checkoutForm).subscribe(
        (data:any) =>  {
          console.log(data);
          if (data.data == undefined) {
            console.log('El usuario no existe')
            this._snackBar.open("message", "action", {
              duration:3000
            });
          } else {
            this.usuario = data.data;
            localStorage.setItem('token', data.token);
            localStorage.setItem('_id', data.data._id);
            this.router.navigate(['/inicio']);
          }
        }
      )
      // HACER LA LLAMADA A LA API
      // SI ES CORRECTA ABRIR EL LISTADO DE PRODUCTOS
      // GENERAR TOKEN
      // NO DAR ERROR QUE EL USUARIO NO
      console.log("Entro al IF -> " + this.checkoutForm.valid);
    }
    else
      console.log("Entro al ELSE -> " + this.checkoutForm.valid);
  }

}
