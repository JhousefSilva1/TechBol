import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService} from 'ngx-toastr';
import { ProductService} from './../../../../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  createProduct: FormGroup;

  submitted = false;
  loading = false;



  ngOnInit(): void {
  }

  constructor(private fb: FormBuilder,
              private _productService: ProductService,
              private router: Router,
              private toastr: ToastrService,          
    ) {
      this.createProduct = this.fb.group({
        productName:['',Validators.required],
        productModel:['',Validators.required],
        productBranch:['',Validators.required],
        productSerial:['',Validators.required],
        productColor:['',Validators.required],
        productCategory:['',Validators.required],
        productPriceFromBuy:['',Validators.required],
        productPriceToSell:['',Validators.required],
        productStock:['',Validators.required],
        productImage:['',Validators.required],
        

      })

     }

     addProduct(){
       this.submitted=true; 
        if(this.createProduct.invalid){
          return;
        }

        const product: any={

          productName:this.createProduct.value.productName,
          productModel: this.createProduct.value.productModel,
          productBranch:this.createProduct.value.productBranch,
          productSerial:this.createProduct.value.productSerial,
          productColor:this.createProduct.value.productColor,
          ProductCategory:this.createProduct.value.productCategory,
          productPriceFromBuy:this.createProduct.value.productPriceFromBuy,
          productPriceToSell:this.createProduct.value.productPriceToSell,
          productStock:this.createProduct.value.productStock,
          productImage:this.createProduct.value.productImage,
          DateCreate: new Date(),
          DateUpdate: new Date(),
          
        }

        this.loading=true;
        this._productService.addProduct(product).then(()=>{
          console.log('Producto Registrado con éxito');
          this.toastr.success(
            'El Producto se ha registrado con éxito','Producto Registrado',
            {positionClass: 'toast-bottom-right'},
          )
          this.loading=false;
          this.router.navigate(['admin/managment-products'])
        }).catch(error=>{
          console.log(error);
        })
          
        console.log(product);
     }

  create(){

  }

  update(){

  }

}
