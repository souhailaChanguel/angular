import { Component, OnInit } from '@angular/core';
import{FakeSessionItemService} from '../fake-sessionitem.service'
@Component({
  selector: 'app-session-add-form',
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css']
})
export class SessionAddFormComponent implements OnInit {

  constructor(private sessionItemsService :FakeSessionItemService) { }

  ngOnInit(): void {
  }
  addSession(sessionItem) {
    this.sessionItemsService.add(sessionItem);
  }
}

