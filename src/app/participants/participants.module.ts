import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantsRoutingModule } from './participants-routing.module';
import { ParticipantsComponent } from './participants/participants.component';
import { EditParticipantComponent } from './edit-participant/edit-participant.component';
import { AddParticipantComponent } from './add-participant/add-participant.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ParticipantsComponent, EditParticipantComponent, AddParticipantComponent],
  imports: [
    CommonModule,
    ParticipantsRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ParticipantsModule { }
