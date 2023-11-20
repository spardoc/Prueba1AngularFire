import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Tarea } from 'src/domain/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasFirebaseService {

  private path = '/tareas'

  tareasRef : AngularFirestoreCollection<any>

  constructor(private db:AngularFirestore) {//Conexion con la base de datos
    this.tareasRef = db.collection(this.path)
    this.tareasRef.valueChanges().subscribe(data => //Todos los cambios que se hagan se realiza lo que se ponga en el metodo
      {
        console.log(data)
      })
   } 

   getAll()
   {
    return this.tareasRef.valueChanges()
   }

   save(tarea: Tarea)
   {
    const uid = this.db.createId()
    tarea.uid = uid
    this.tareasRef.doc(uid).set(Object.assign({}, tarea))
   }

   getTarea(uid: string)
   {
    console.log('uid',uid)
    return this.db.doc(this.path+'/'+uid).valueChanges()
   }
}
