import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-managment-products',
  templateUrl: './managment-products.component.html',
  styleUrls: ['./managment-products.component.css']
})
export class ManagmentProductsComponent implements OnInit {

  products: any[]=[];

  constructor(private _productService: ProductService,
              private router: Router, ) { 


              }


  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){

    this._productService.getProduct().subscribe((data: any) =>{
      this.products=[];
      console.log(data);

      data.forEach((element:any)=>{
        console.log(element.payload.doc.id);
        console.log(element.payload.doc.data());
        this.products.push({
          id:element.payload.doc.id,//el id de cada producto
          ...element.payload.doc.data(),
        })
      });

        console.log(this.products);
    })

  }

}
