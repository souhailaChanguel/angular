import { NgModule } from '@angular/core';
import { ParticipantsComponent } from './participants/participants.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '', component: ParticipantsComponent
  }
 ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantsRoutingModule { }
