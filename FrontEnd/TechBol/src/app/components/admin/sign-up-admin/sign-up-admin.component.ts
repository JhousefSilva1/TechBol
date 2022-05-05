import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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



  ngOnInit(): void {   }


  constructor(private fb: FormBuilder,
              private _adminService: AdminService,
              private router: Router,
              private toastr: ToastrService,
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
  }

  addAdmin(){
    this.submitted=true;

    if(this.createAdmin.invalid){
      return;
    }
      
    

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
        console.log('Administrador creado con éxito');
        this.toastr.success(
          'Se ha registrado al administrador con éxito',
          'Administrador Registrado',
          {positionClass:'toast-bottom-right' },

        )
        this.loading=false;
        this.router.navigate(['admin/managment-admins'])
        
      }).catch(error =>{
        console.log(error);
      })
      console.log(admin);

  }
}
