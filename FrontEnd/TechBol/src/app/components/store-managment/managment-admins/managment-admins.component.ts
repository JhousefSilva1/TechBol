import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-managment-admins',
  templateUrl: './managment-admins.component.html',
  styleUrls: ['./managment-admins.component.css']
})
export class ManagmentAdminsComponent implements OnInit {

  admins: any[]=[];

  constructor(private _adminService: AdminService,
              private router: Router, )
     { }

  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins(){
    this._adminService.getAdmin().subscribe((data:any)=>{
        this.admins=[];
        console.log(data);

        data.forEach((element:any)=>{
          console.log(element.payload.doc.id);
          console.log(element.payload.doc.data());
          this.admins.push({
            id:element.payload.doc.id,
            ...element.payload.doc.data(),
          })
        });
        console.log(this.admins);
    })
  }

}
