import { Injectable } from '@angular/core';
import { SESSIONITEMS } from './Sessions';

@Injectable()
export class FakeSessionItemService {
  constructor() { }
  /************Get sessions *************/
  get() { return SESSIONITEMS; }

  /************Add Session*************/
  add(sessionItem) {
    sessionItem.id = SESSIONITEMS.length + 1;
    SESSIONITEMS.push(sessionItem);
  }

  /************Delete Session**********/
  delete(sessionItem) {
    let index;
    index = SESSIONITEMS.indexOf(sessionItem);
    if (SESSIONITEMS.indexOf(sessionItem) >= 0) {
      SESSIONITEMS.splice(index, 1);
    }
  }
 /************Get session *************/
  getSession(id: number) {
    return SESSIONITEMS[id - 1];
   }
   
}