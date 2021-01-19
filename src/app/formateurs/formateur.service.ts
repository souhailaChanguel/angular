import { Injectable } from '@angular/core';
import { FORMATEURS } from './Formateurs'
import { Formateur } from './Formateur';
@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor() { }

  /************Get formateurs *************/
  get() { return FORMATEURS; }

  /************Add formateur*************/
  add(formateur) {
    formateur.id = FORMATEURS.length + 1;
    FORMATEURS.push(formateur);
  }

  /************Delete formateur**********/
  delete(id: number) {
    const i = FORMATEURS.findIndex(e => e.id === id);
    if (i !== -1) {
      FORMATEURS.splice(i, 1);
    }
  }
  /**********Update formateur*********** */
  update(formateur) {
    const i = FORMATEURS.findIndex(e => e.id === formateur.id);
    FORMATEURS[i] = formateur;

  }
  /************Get formateur *************/
  getformateur(id: number) {
    return FORMATEURS[id - 1];
  }

}