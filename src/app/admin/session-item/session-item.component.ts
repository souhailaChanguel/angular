import { Component, OnInit, Input } from '@angular/core';
import{FakeSessionItemService} from '../fake-sessionitem.service'
@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  @Input() session: any;
  constructor(private sessionItemsService :FakeSessionItemService) { }

  ngOnInit(): void {
  }
  onDelete()
  {
    this.sessionItemsService.delete(this.session);
  }

}
