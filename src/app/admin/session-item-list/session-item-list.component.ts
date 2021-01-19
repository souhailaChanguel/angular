import { Component, OnInit } from '@angular/core';
import { FakeSessionItemService } from '../fake-sessionitem.service'
@Component({
  selector: 'app-session-item-list',
  templateUrl: './session-item-list.component.html',
  styleUrls: ['./session-item-list.component.css']
})
export class SessionItemListComponent implements OnInit {
  sessionItems;
  constructor(private sessionItemsService: FakeSessionItemService) {

  }

  ngOnInit(): void {
    this.sessionItems = this.sessionItemsService.get();
  }

}
