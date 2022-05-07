import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class DatabaseService{
    constructor(private firestore: AngularFirestore){     }

    addCategory(category:any):Promise<any>{
        return this.firestore.collection('categories').add(category);
    }

    getCategory():Observable<any>{
        return this.firestore.collection('categories').snapshotChanges();
    }

        
    }
