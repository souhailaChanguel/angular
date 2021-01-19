import { Injectable } from '@angular/core';
import { PARTICIPANTS } from './Participants'
@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor() { }
  /************Get PARTICIPANTS *************/
  get() { return PARTICIPANTS; }

  /************Add PARTICIPANTS*************/
  add(participant) {
    participant.id = PARTICIPANTS.length + 1;
    PARTICIPANTS.push(participant);
  }

  /************Delete PARTICIPANTS**********/
  delete(id: number) {
    const i = PARTICIPANTS.findIndex(e => e.id === id);
    if (i !== -1) {
      PARTICIPANTS.splice(i, 1);
    }
  }
  /**********Update PARTICIPANTS*********** */
  update(participant) {
    const i = PARTICIPANTS.findIndex(e => e.id === participant.id);
    PARTICIPANTS[i] = participant;

  }
  /************Get PARTICIPANTS *************/
  getParticipant(id: number) {
    return PARTICIPANTS[id - 1];
  }

}

