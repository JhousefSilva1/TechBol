import { Component, OnInit, NgModule } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DatabaseService } from './../../../services/database.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';
import { ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-sign-up-customer',
  templateUrl: './sign-up-customer.component.html',
  styleUrls: ['./sign-up-customer.component.css']
})
export class SignUpCustomerComponent implements OnInit  {

  createCustomer: FormGroup;
  submitted = false;
  loading = false;

  ngOnInit(): void {
    
  }

/*
  customer={
    name:'',
    lastname:'',
    birthday:'',
    gender:'',
    email:'',
    cellphone:'',
    dni:'',
    city:'',
    password:'',


  }*/

  constructor(private fb: FormBuilder,
              private _customerService: CustomerService,
              private router: Router,
              private toastr: ToastrService,
              
              ) {
    this.createCustomer = this.fb.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      birthday:['',Validators.required],
      gender:[''],
      email:['',Validators.required],
      cellphone:['',Validators.required],
      dni:['',Validators.required],
      city:['',Validators.required],
      password:['',Validators.required],

    })
   }



   addCustomer(){
    this.submitted=true;

    if(this.createCustomer.invalid){
      return;
    }

    const customer: any={
      name: this.createCustomer.value.name,
      lastname: this.createCustomer.value.lastname,
      birthday: this.createCustomer.value.birthday,
      gender: this.createCustomer.value.gender,
      email: this.createCustomer.value.email,
      cellphone:this.createCustomer.value.cellphone,
      dni:this.createCustomer.value.dni,
      city:this.createCustomer.value.city,
      password:this.createCustomer.value.password,
      DateCreate: new Date(),
      DateUpdate: new Date(),


    }
    this.loading = true;
      this._customerService.addCustomer(customer).then(()=>{
          console.log('Empleado registrad con éxito');
          this.toastr.success(
          'Se ha registrado con éxito como cliente, ¡Felicidades! ',
          'Usuario Registrado',
          {positionClass: 'toast-bottom-right'},

          
          )
          this.loading=false;
          this.router.navigate(['customer/Log-In'])
      }).catch(error =>{
        console.log(error);
      })


 console.log(customer);

  }

  

  }




