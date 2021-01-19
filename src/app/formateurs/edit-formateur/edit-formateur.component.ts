import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Formateur } from '../Formateur';
import { FormateurService } from '../formateur.service'

@Component({
  selector: 'app-edit-formateur',
  templateUrl: './edit-formateur.component.html',
  styleUrls: ['./edit-formateur.component.css']
})
export class EditFormateurComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditFormateurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Formateur, private FormateurService: FormateurService) {

  }

  ngOnInit(): void {
  }
  //****EDIT formateur*** */
  editFormateur(formateur: Formateur) {
    formateur.id = this.data.id;
    this.FormateurService.update(formateur);

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

