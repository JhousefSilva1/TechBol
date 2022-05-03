import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-log-in-customer',
  templateUrl: './log-in-customer.component.html',
  styleUrls: ['./log-in-customer.component.css']
})
export class LogInCustomerComponent implements OnInit {

  usuario={
    email:'',
    password:'',
  }

  ngOnInit() {
 
  }

  constructor(private authService: AuthService, private router: Router){

  }

  Ingresar(){
    console.log(this.usuario);
    const{email,password}= this.usuario;
    this.authService.register(email,password).then(res=>{
      console.log("Se registro",res);
    })


  }

  IngresarConGoogle(){
    console.log(this.usuario);
    const{email,password}= this.usuario;
    this.authService.loginWithGoogle(email,password).then(res=>{
      console.log("Se registro",res);
    })


  }
/*
  ObtenerUsuarioLoggeado(){
      this.authService.getUserLogged().subscribe(res=>{
        console.log(res?.email);
      })
  }
*/
  LogOut(){
    this.authService.logout();
  }



}
