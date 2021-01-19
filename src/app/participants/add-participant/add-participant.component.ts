import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ParticipantService } from '../participant.service';
import { Participant } from '../Participant';
@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddParticipantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Participant, private ParticipantService: ParticipantService) { }

  ngOnInit(): void {
  }
  /****ADD Participant *****/
  addParticipant(participant) {
    this.ParticipantService.add(participant);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
