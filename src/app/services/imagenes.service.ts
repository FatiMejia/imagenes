import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(private firestore:AngularFirestore) { }

  //metodo para crear un nuevo documento
  createImagen(data:{descripcion:string,url:string}){
    return this.firestore.collection('imagenes').add(data);
  }

  //metodo para obtener todos los documentos
  getImagenes(){
    return this.firestore.collection('imagenes').snapshotChanges();
  }

  //metodo para obtener un solo documento por su id
  getImagen(documentId:string){
    return this.firestore.collection('imagenes').doc(documentId).snapshotChanges();
  }

  //metodo para modificar un documentos
  updateImagen(documentId:string,data:any){
    return this.firestore.collection('imagenes').doc(documentId).set(data);
  }

  //metodo para eliminar un documentos
  deleteImagen(documentId:string){
    return this.firestore.collection('imagenes').doc(documentId).delete();
  }
}
