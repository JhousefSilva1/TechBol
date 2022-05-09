import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-managment-categories',
  templateUrl: './managment-categories.component.html',
  styleUrls: ['./managment-categories.component.css']
})
export class ManagmentCategoriesComponent implements OnInit {

  categories:any[]=[];
  submitted=false;
  loading=false;
  id: string | null;
  titulo = 'AGREGAR CATEGORIAS';

  constructor(private _categoryService: CategoryService,
              private router: Router,
              private toastr: ToastrService,
              private aRoute: ActivatedRoute,
              ){ 

    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)

      
    }

  ngOnInit(): void {
    this.getCategories();
    this.editCategories();
  }

  getCategories(){

    this._categoryService.getCategory().subscribe((data:any)=>{
      
      this.categories=[];
      console.log(data);

      data.forEach((element:any)=>{
        console.log(element.payload.doc.id);
        console.log(element.payload.doc.data());
        this.categories.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data(),
        })
      });
      console.log(this.categories)
    })


    }
    deleteCategories(id:string){
      this._categoryService.deleteCategory(id).then(()=>{
        console.log('Categoria Eliminada con éxito'),
        this.toastr.info('La categoría ha sido eliminada con éxito','Categoria Eliminada',
        {positionClass: 'toast-bottom-right'});

      }).catch(error =>{
        console.log(error);
      });
  }

  editCategories(){
    this.titulo='EDITAR CAEGORIA'
    if(this.id !==null){
      this._categoryService.editCategory(this.id).subscribe(data =>{
        console.log(data)
      })
    }
  }
    

}
