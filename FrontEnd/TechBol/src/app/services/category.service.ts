import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private firestore: AngularFirestore) { }


  addCategory(category:any):Promise<any>{
    return this.firestore.collection('categories').add(category);
  }
}
