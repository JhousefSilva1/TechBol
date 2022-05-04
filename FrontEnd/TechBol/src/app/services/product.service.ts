import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestore) { }

  addProduct(product:any):Promise<any>{
      return this.firestore.collection('products').add(product);
  }

  
}
