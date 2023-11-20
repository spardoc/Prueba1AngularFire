import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TareasFirebaseService } from 'src/app/services/tareas-firebase.service';
import { Tarea } from 'src/domain/tarea';

@Component({
  selector: 'app-view-tarea',
  templateUrl: './view-tarea.component.html',
  styleUrls: ['./view-tarea.component.scss']
})
export class ViewTareaComponent {
  tarea :Tarea = new Tarea();
  
  constructor(private router:Router,
    private route: ActivatedRoute,
    private tareasFirebaseService: TareasFirebaseService)
    {
      this.route.params.subscribe(params => 
        {
          console.log(params)
          if(params['uid'])
          {
            this.loadTarea(params['uid'])
          }
        })
    }

  goListado() // Para ir a el listado de tareas
  {
    console.log("Llamando lista de tareas")
    this.router.navigate(['pages/lista-tareas'])
  }

  loadTarea(uid:string) { //Para obtener la informacion de la tarea que hicimos clic
    console.log(uid)
    this.tareasFirebaseService.getTarea(uid).subscribe(data => 
      {
        console.log(data)
        this.tarea = <any> data
      })
  }
}
