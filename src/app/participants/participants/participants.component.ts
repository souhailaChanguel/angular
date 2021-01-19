import { Component, OnInit } from '@angular/core';
import { EditParticipantComponent } from '../edit-participant/edit-participant.component';
import { AddParticipantComponent } from '../add-participant/add-participant.component';
import { MatDialog} from '@angular/material/dialog';
import { ParticipantService } from '../participant.service';
@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  id: number;
  nom: string;
  prenom: string;
  adresse: string;
  email: string;
  ste: string;
  poste: string;
  participants;
  constructor(public dialog: MatDialog, private ParticipantService: ParticipantService) { }

  ngOnInit(): void {
    this.participants = this.ParticipantService.get();
  }

  //*****************Popup pour ajouter des Participants****************//
  openDialog(): void {
    const dialogRef = this.dialog.open(AddParticipantComponent, {
      width: '568px',
      height: '511px',
      data: { id: this.id, nom: this.nom, prenom: this.prenom, adresse: this.adresse, email: this.email, ste: this.ste, poste: this.poste }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.prenom = result;
    });
  }
  // ******************Popup pour modifier des formateurs*****************//
  openDialogUpdate(id: number): void {
    const froma = this.ParticipantService.get().find(c => c.id === id)
    const dialogRef = this.dialog.open(EditParticipantComponent, {
      width: '568px',
      height: '511px',
      data: froma
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.prenom = result;
    });
  }
  //*******************Delete formateur***************************//
  deleteParticipant(id: number) {
    this.ParticipantService.delete(id);
  }

}


