import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { retry } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestore) { }

  addProduct(product:any):Promise<any>{
      return this.firestore.collection('products').add(product);
  }

  getProduct():Observable<any>{
    return this.firestore.collection('products').snapshotChanges();
  }

  getShowProduct():Observable<any>{
    return this.firestore.collection('products').snapshotChanges();
  }

  deleteProduct(id:string): Promise<any>{
    return this.firestore.collection('products').doc(id).delete();
  }

  editProduct(id:string):Observable<any>{
    return this.firestore.collection('products').doc(id).snapshotChanges();
  }

  updateProduct(id:string , data:any):Promise<any>{
    return this.firestore.collection('products').doc(id).update(data);
  }
  
}
