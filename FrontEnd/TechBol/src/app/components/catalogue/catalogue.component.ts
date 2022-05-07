import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {





  products:  any []=[];

  loading=false;
  submitted=false;

  

  

  constructor(private fb: FormBuilder,
              private _productService: ProductService,
              private router: Router,
              private toastr: ToastrService) { 


              }

ngOnInit(): void { 
this.getShowProducts();

}

getShowProducts(){

  this._productService.getShowProduct().subscribe((data:any)=>{
      this.products=[];
      console.log(data);

      data.forEach((element:any)=>{
        console.log(element.payload.doc.id);
        console.log(element.payload.doc.data());
        this.products.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data(),
        })
      });
        console.log(this.products);
  });

}

}
