import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-log-in-customer',
  templateUrl: './log-in-customer.component.html',
  styleUrls: ['./log-in-customer.component.css']
})
export class LogInCustomerComponent implements OnInit {

  customer={
    email:'',
    password:'',
  }

  ngOnInit() {
 
  }

  constructor(  private auth: AuthService, 
                private router: Router){

  }
/*
  Ingresar(){
    console.log(this.customer);
    const{email,password}= this.customer
    this.authService.register(email,password).then(res=>{
      console.log("Se registro",res);
    })


  }

  IngresarConGoogle(){
    console.log(this.customer);
    const{email,password}= this.customer;
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
// CustomerLogIn
 async LogIn(){
    console.log('credenciales -> ', this.customer);
    const res = await this.auth.login(this.customer.email, this.customer.password);

    if(res){
      console.log('res ->', res);
    }
    
  }










  LogOut(){
    this.auth.logout();
  }



}
