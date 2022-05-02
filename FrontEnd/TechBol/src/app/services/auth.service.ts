import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth ) {



   }

//registro de cuentas
   async register(email: string, password: string) {
    try {
      return await this.afauth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
     
      return null;
    }
  }





//Iniciar Sesion con cuentas creada
   async login(email: string, password: string) {
    try {
      return await this.afauth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("error en login: ", err);
      return null;
    }
  }


  //Iniciaar Sesion con Goolge
  async loginWithGoogle (email: String, password:String){
    try{
        return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }catch(err){
        console.log("error en login con la cuenta de google", err);
        return null;
    }

  }
}
