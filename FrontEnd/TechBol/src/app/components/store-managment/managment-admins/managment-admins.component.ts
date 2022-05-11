import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { elementAt } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-managment-admins',
  templateUrl: './managment-admins.component.html',
  styleUrls: ['./managment-admins.component.css']
})
export class ManagmentAdminsComponent implements OnInit {

  admins: any[]=[];
  id: string | null;
  titulo = 'AGREGAR ADMINISTRADORES';

  constructor(private _adminService: AdminService,
              private router: Router,
              private toastr: ToastrService,
              private aRoute: ActivatedRoute, )
     { 
      this.id = this.aRoute.snapshot.paramMap.get('id');
      console.log(this.id)


     }

  ngOnInit(): void {
    this.getAdmins();
    this.editAdmins();
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
  deleteAdmins(id:string){
    this._adminService.deleteAdmin(id).then(() => {
      console.log('El Administrador ha sido eliminado correctamente');
      this.toastr.info('El Administrador h sido eliminado','Administrador Eliminado',
      {positionClass:'toast-bottom-right'});
    }).catch(error=>{
    console.log(error);  
    });
  }

editAdmins(){
  this.titulo='EDITAR ADMINISTRADORES'

  if(this.id !==null){
    this._adminService.editAdmin(this.id).subscribe(data=>{
        console.log(data);
    })
  }
}

}
