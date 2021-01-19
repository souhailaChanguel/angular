import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormateursRoutingModule } from './formateurs-routing.module';
import { FormateursComponent } from './formateurs/formateurs.component';
import { EditFormateurComponent } from './edit-formateur/edit-formateur.component';
import { AddFormateurComponent } from './add-formateur/add-formateur.component';
import {MatDialogModule} from '@angular/material/dialog';
import{FormateurService} from './formateur.service'
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [FormateursComponent, EditFormateurComponent, AddFormateurComponent],
  imports: [
    CommonModule,
    FormateursRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
 
  ],
  providers :[FormateurService],
})
export class FormateursModule { }
