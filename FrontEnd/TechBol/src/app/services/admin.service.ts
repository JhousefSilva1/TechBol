import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private firestore: AngularFirestore) {

   }


   addAdmin(admin:any):Promise<any>{
     return this.firestore.collection('admins').add(admin);
   }

   getAdmin():Observable<any>{
     return this.firestore.collection('admins').snapshotChanges();
   }


}
