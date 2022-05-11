import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../../../services/category.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  createCategory: FormGroup;

  submitted = false;
  loading = false;


  ngOnInit(): void {
  }



  constructor(private fb: FormBuilder,
              private _categoryService: CategoryService,
              private router: Router,
              private toastr: ToastrService,    
        ) { 
          this.createCategory = this.fb.group({
            categoryName:['',Validators.required],
            categoryDetail:['',Validators.required],
          })


        }
    addCategory(){
      this.submitted=true;
        if(this.createCategory.invalid){
          return;
        }

        const category: any={
          categoryName:this.createCategory.value.categoryName,
          categoryDetail:this.createCategory.value.categoryDetail,
          DateCreate: new Date(),
          DateUpdate: new Date(),
          DateDelete: new Date(),


        }


        this,this.loading=true;
        this._categoryService.addCategory(category).then(() => {
          console.log('Categoria agregada con éxito');
          this.toastr.success(
            'La Categoria fue agregada con éxito','Categoria Agregada',
            {positionClass: 'toast-bottom-right'},
          )
          this.loading=false;
          this.router.navigate(['/admin/managment-categories'])
        }).catch(error=>{
          console.log(error);
        })
        console.log(category);
    }


}
