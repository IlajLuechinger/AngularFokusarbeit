import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import  { ProjectListComponent} from "./project-list/project-list.component";
import {KanbanComponent} from "./kanban/kanban.component";
import {AufgabeDetailliertComponent} from "./aufgabe-detailliert/aufgabe-detailliert.component";
import {StopwatchComponent} from "./stopwatch/stopwatch.component";

//Hier werden die Routen festgelegt
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'projects', component: ProjectListComponent},
  {path: 'kanban/:id', component: KanbanComponent },
  {path: 'aufgabeDetails/:id', component: AufgabeDetailliertComponent},
  {path: 'stopwatch', component: StopwatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
