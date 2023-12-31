import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environments';
import { FormsModule } from '@angular/forms';
import { TareaComponent } from './pages/tarea/tarea.component';
import { ListaTareasComponent } from './pages/lista-tareas/lista-tareas.component';
import { MenuComponent } from './menu/menu.component';
import { ViewTareaComponent } from './pages/view-tarea/view-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    TareaComponent,
    ListaTareasComponent,
    MenuComponent,
    ViewTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    { provide : FIREBASE_OPTIONS, useValue: environment.firebaseConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
