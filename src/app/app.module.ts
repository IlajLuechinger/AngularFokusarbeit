import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { KanbanComponent } from './kanban/kanban.component';
import { AufgabeDetailliertComponent } from './aufgabe-detailliert/aufgabe-detailliert.component';
import { StorageServiceModule} from "angular-webstorage-service";
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import {DragDropModule} from "@angular/cdk/drag-drop";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProjectListComponent,
    KanbanComponent,
    AufgabeDetailliertComponent,
    StopwatchComponent,

  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        StorageServiceModule,
        DragDropModule,
    ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
