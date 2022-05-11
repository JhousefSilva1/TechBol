import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  id: string | null;
  titulo = 'AGREGAR CATEGORIA';

  ngOnInit(): void {
    this.editCategories();
  }



  constructor(private fb: FormBuilder,
              private _categoryService: CategoryService,
              private router: Router,
              private toastr: ToastrService,  
              private aRoute: ActivatedRoute,  
        ) { 
          this.createCategory = this.fb.group({
            categoryName:['',Validators.required],
            categoryDetail:['',Validators.required],
          })
          this.id = this.aRoute.snapshot.paramMap.get('id');
          console.log(this.id)


        }
    addEditCategory(){
      this.submitted=true;
        if(this.createCategory.invalid){
          return;
        }

        if(this.id==null){
          this.addCategory();
        }
        else{
          this.editCategory(this.id);
        }

      }
      addCategory(){
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

      editCategory(id:string){
        const category: any={
          categoryName:this.createCategory.value.categoryName,
          categoryDetail:this.createCategory.value.categoryDetail,
          DateUpdate: new Date(),
        }
        this.loading=true;
          this._categoryService.updateCategory(id, category).then(() => {
            this.loading=false;
            this.toastr.info('Categoria Modificada con éxito!','Categoria Modificada',
            {positionClass: 'toast-bottom-right'
          })
          this.router.navigate(['admin/managment-categories']);
          })

        }

        editCategories(){
            if(this.id !==null){
              this.titulo='EDITAR CATEGORIA'

              this.loading=true;
                this._categoryService.editCategory(this.id).subscribe(data =>{
                  this.createCategory.setValue({

                  })
                })

            }
        }

       


    }



