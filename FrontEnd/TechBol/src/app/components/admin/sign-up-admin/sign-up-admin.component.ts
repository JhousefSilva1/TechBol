import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-sign-up-admin',
  templateUrl: './sign-up-admin.component.html',
  styleUrls: ['./sign-up-admin.component.css']
})
export class SignUpAdminComponent implements OnInit {


  createAdmin: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'AGREGAR ADMINISTRADOR';


  ngOnInit(): void {   
    this.editAdmins();
  }


  constructor(private fb: FormBuilder,
              private _adminService: AdminService,
              private router: Router,
              private toastr: ToastrService,
              private aRoute: ActivatedRoute,
    ) { 

      this.createAdmin = this.fb.group({
        name:['',Validators.required],
        lastname:['',Validators.required],
        birthday:['', Validators.required],
        startDate:['',Validators.required],
        email:['', Validators.required],
        cellPhone:['',Validators.required],
        dni:['',Validators.required],
        city:['', Validators.required],
        password:['',Validators.required],
        


        
      })

      this.id = this.aRoute.snapshot.paramMap.get('id');
      console.log(this.id)
  }

  addEditAdmin(){
    this.submitted=true;

    if(this.createAdmin.invalid){
      return;
    }

    if(this.id==null){
      this.addAdmin();
    }
    else{
      this.editAdmin(this.id);
    }

  }

  addAdmin(){
    const admin:any={
      name:this.createAdmin.value.name,
      lastname:this.createAdmin.value.lastname,
      birthday:this.createAdmin.value.birthday,
      startDate:this.createAdmin.value.startDate,
      email:this.createAdmin.value.email,
      cellPhone:this.createAdmin.value.cellPhone,
      dni:this.createAdmin.value.dni,
      city:this.createAdmin.value.city,
      password:this.createAdmin.value.password,
    }

    this.loading=true;
    this._adminService.addAdmin(admin).then(()=>{
      console.log('Administrador agregado correctamente');
      this.toastr.success(
        'El administrador fue agregado con éxito','Administrador',
        {positionClass: 'toast-bottom-right'},

      )

      this.loading=false;
      this.router.navigate([''])
    }).catch(error =>{
      console.log(error);
    })
    console.log(admin);

  }

  editAdmin(id:string){

    const admin:any={
      name:this.createAdmin.value.name,
      lastname:this.createAdmin.value.lastname,
      birthday:this.createAdmin.value.birthday,
      startDate:this.createAdmin.value.startDate,
      email:this.createAdmin.value.email,
      cellPhone:this.createAdmin.value.cellPhone,
      dni:this.createAdmin.value.dni,
      city:this.createAdmin.value.city,
      password:this.createAdmin.value.password,
    }
    this.loading=true;

    this._adminService.updateAdmin(id, admin).then(()=>{
      this.loading=false;
      this.toastr.info('El administrador fue editado correctamente','Administrador',
      {positionClass: 'toast-bottom-right'
    })
    this.router.navigate(['']);
  })


}
editAdmins(){
  if(this.id !==null){
    this.titulo='EDITAR ADMINISTRADOR'

    this.loading=true;
    this._adminService.editAdmin(this.id).subscribe(data=>{

      this.createAdmin.setValue({

      })
    })
  }
}
      
  
}