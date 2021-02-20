import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './app/footer/footer.component';
import { ProyectsComponent } from './app/proyects/proyects.component';
import { SkillsetComponent } from './app/skillset/skillset.component';
import { ExperienceComponent } from './app/experience/experience.component';
import { ContactComponent } from './app/contact/contact.component';
import { NavComponent } from './app/nav/nav.component';
import { ModalskillsetComponent } from './app/modalskillset/modalskillset.component';
import { ModalprojectComponent } from './app/modalproject/modalproject.component';
import { ModalexperienceComponent } from './app/modalexperience/modalexperience.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProyectsComponent,
    SkillsetComponent,
    ExperienceComponent,
    ContactComponent,
    NavComponent,
    ModalskillsetComponent,
    ModalprojectComponent,
    ModalexperienceComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
