import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../participant.service';
import { Participant } from '../Participant';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-edit-participant',
  templateUrl: './edit-participant.component.html',
  styleUrls: ['./edit-participant.component.css']
})
export class EditParticipantComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<EditParticipantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Participant, private ParticipantService: ParticipantService) {

  }

  ngOnInit(): void {
  }
  //****EDIT participant*****/
  editParticipant(participant: Participant) {
    participant.id = this.data.id;
    this.ParticipantService.update(participant);

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
