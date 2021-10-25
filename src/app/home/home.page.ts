import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../api/login/login-service.service';
import { UtilService } from '../api/util.service';
import { AuthService } from '../api/auth/auth.service';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myForm: FormGroup;
  
  constructor(public fb: FormBuilder , public loginService: LoginServiceService ,public Util:  UtilService,private router: Router,
    private authService: AuthService) {
    this.myForm = fb.group({     
      email: ['', [Validators.required, Validators.email]],     
      password: ['',[ Validators.required]]  
    });
  }

  Login(){
    //console.log(CryptoJS.MD5(this.myForm.controls.password.value).toString());
    //this.myForm.reset();
    this.Util.presentLoading();
    this.loginService.Login(this.myForm.controls.email.value , CryptoJS.MD5(this.myForm.controls.password.value).toString()).subscribe(
      (data) => {        
        this.authService.setUser(data)
       if( this.authService.login(this.authService.getUser().Role)){
        this.loginService.getMenus(this.authService.getUser().Role).subscribe(
          (data) => {
           this.authService.setPages(data.Pages);
           localStorage.setItem("token", this.authService.getUser().token);
           this.router.navigateByUrl('/viaje');
            },
          (error) => {
            console.error(error)
          });
       }
        this.myForm.reset();
        },
      (error) => {
        console.error(error);
        this.Util.presentToast("No se pudo conectar con el servicio, por favor contacte al administrador del sistema");
      })
  }

}
