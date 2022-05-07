import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { elementAt } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-managment-products',
  templateUrl: './managment-products.component.html',
  styleUrls: ['./managment-products.component.css']
})
export class ManagmentProductsComponent implements OnInit {

  products: any[]=[];
  submitted=false;
  loading=false;
  id: string | null;
  titutlo = 'AGREGAR PRODUCTOS';

  constructor(private _productService: ProductService,
              private toastr: ToastrService,
              private router: Router,
              private aRoute: ActivatedRoute,
               ) { 
              
this.id = this.aRoute.snapshot.paramMap.get('id');
console.log(this.id)
              }


  ngOnInit(): void {
    this.getProducts();
    this.editProducts();
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

  deleteProducts(id:string){
    this._productService.deleteProduct(id).then(()=>{
      console.log('Produto eliminado con éxito');
      this.toastr.info('El producto ha sido eliminado con éxito','Producto elimimnado',
      {positionClass: 'toast-bottom-right'});

    }).catch(error =>{
        console.log(error);
    });
  }

  editProducts(){
    this.titutlo='EDITAR PRODUCTOS'
    if(this.id !==null){
        this._productService.editProduct(this.id).subscribe(data=>{
            console.log(data)
        })
    }
  }

}
