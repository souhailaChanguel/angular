import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Formateur } from '../Formateur';
import { FormateurService } from '../formateur.service'

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.css']
})
export class AddFormateurComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<AddFormateurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Formateur, private FormateurService: FormateurService) { }

  ngOnInit(): void {
  }
  //****ADD formateur */
  addFormateur(formateur) {
    this.FormateurService.add(formateur);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }



}