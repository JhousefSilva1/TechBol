import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in-admin',
  templateUrl: './log-in-admin.component.html',
  styleUrls: ['./log-in-admin.component.css']
})
export class LogInAdminComponent implements OnInit {


  admin={
    email:'',
    password:'',
  }

  constructor(  private auth: AuthService, 
    private router: Router){

}

  ngOnInit(): void {
  }



  //admin Log In
  async LogInAdmin(){
    console.log('credenciales -> ', this.admin);
    const res = await this.auth.loginadmin(this.admin.email, this.admin.password);

    if(res){
      console.log('res ->', res);
    }
    
  }



LogOut(){
  this.auth.logout();
}



}

