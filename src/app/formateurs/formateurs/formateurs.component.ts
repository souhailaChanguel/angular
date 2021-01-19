import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddFormateurComponent } from '../add-formateur/add-formateur.component';
import { FormateurService } from '../formateur.service'
import { EditFormateurComponent } from '../edit-formateur/edit-formateur.component';


@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent implements OnInit {
  id: number;
  nom: string;
  prenom: string;
  adresse: string;
  email: string;
  domaineExp: string;
  formateurs;
  constructor(public dialog: MatDialog, private FormateurService: FormateurService) { }

  ngOnInit(): void {
    this.formateurs = this.FormateurService.get();
  }


  // ****************Popup pour ajouter des formateurs****************//
  openDialog(): void {
    const dialogRef = this.dialog.open(AddFormateurComponent, {
      width: '500px',
      height: '450px',
      data: { id: this.id, nom: this.nom, prenom: this.prenom, adresse: this.adresse, email: this.email, domaineExp: this.domaineExp }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // ***************Popup pour modifier des formateurs**********//
  openDialogUpdate(id: number): void {

    const froma = this.FormateurService.get().find(c => c.id === id)
    const dialogRef = this.dialog.open(EditFormateurComponent, {
      width: '500px',
      height: '450px',
      data: froma

    });
    console.log(id);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  //******************Delete formateur**************************//
  deleteFormateur(id: number) {
    this.FormateurService.delete(id);
  }

}
