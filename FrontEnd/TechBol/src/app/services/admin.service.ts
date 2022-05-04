import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private firestore: AngularFirestore) {

   }


   addAdmin(admin:any):Promise<any>{
     return this.firestore.collection('admins').add(admin);
   }


}
