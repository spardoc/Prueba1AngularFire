import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"prueba1-483fc","appId":"1:703645748695:web:71b439fe75d3214d6a0f92","storageBucket":"prueba1-483fc.appspot.com","apiKey":"AIzaSyD2m06MI9nPJWZLPxdYq54dskPz9jxCyqA","authDomain":"prueba1-483fc.firebaseapp.com","messagingSenderId":"703645748695","measurementId":"G-9478J7FBLX"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
