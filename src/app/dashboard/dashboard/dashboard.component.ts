import { Component, OnInit } from '@angular/core';
import { SESSIONITEMS } from '../../admin/Sessions';
import { FakeSessionItemService } from '../../admin/fake-sessionitem.service';
import { FORMATEURS } from '../../formateurs/Formateurs';
import { PARTICIPANTS } from '../../participants/Participants';
import {FormateurService} from '../../formateurs/formateur.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sessionItems;
  formateurs;
  lgParticipant;
  lgFormateur;
  lgSession;
  autorisation : boolean;
  constructor(private sessionItemsService: FakeSessionItemService, private FormateurService : FormateurService) { }

  ngOnInit(): void {
    this.sessionItems = this.sessionItemsService.get();
    this.formateurs = this.FormateurService.get();
    this.lgParticipant = PARTICIPANTS.length;
    this.lgFormateur = FORMATEURS.length;
    this.lgSession = SESSIONITEMS.length;
  }

  /*******Session number***** */
  countSession(track : string)
  {
   let resultat = 0;
   SESSIONITEMS.forEach(i=>
    {
       if (i.track === track)
       {
         resultat++;
       }
    });
   
    return resultat;
  }
 
}
