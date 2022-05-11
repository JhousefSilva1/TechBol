import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-managment-categories',
  templateUrl: './managment-categories.component.html',
  styleUrls: ['./managment-categories.component.css']
})
export class ManagmentCategoriesComponent implements OnInit {

  categories:any[]=[];

  constructor(private _categoryService: CategoryService,
              private router: Router,)
              
              { 

      
    }

  ngOnInit(): void {
    this.getCategories();
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





     

}
