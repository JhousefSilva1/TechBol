import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  id: string | null;
  titulo = 'AGREGAR PRODUCTOS';


  ngOnInit(): void {
    
    this.editProducts();
  }

  constructor(private fb: FormBuilder,
              private _productService: ProductService,
              private router: Router,
              private toastr: ToastrService,    
              private aRoute: ActivatedRoute,      
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
      this.id = this.aRoute.snapshot.paramMap.get('id');
      console.log(this.id)

     }

     addEditProduct(){
     
       this.submitted=true; 
        if(this.createProduct.invalid){
          return;
        }

        if(this.id==null){
          this.addProduct();
        }
        else{
          this.editProduct(this.id);
        }


     }
     addProduct(){

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
     editProduct(id:string){

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
        DateUpdate: new Date(),
        
      }

      this.loading=true;
       
       this._productService.updateProduct(id, product).then(()=>{
          this.loading=false;
          this.toastr.info('Producto modificado con éxito','Modificación de Producto',
          {positionClass:'toast-bottom-right'
        })
          this.router.navigate(['admin/managment-products']);
       })
     }

     
  editProducts(){
      
    if(this.id !==null){
      this.titulo='EDITAR PRODUCTO'

      this.loading=true;
        this._productService.editProduct(this.id).subscribe(data=>{
            
            
            this.createProduct.setValue({

            })

        })
    }
  }


}
