import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {

  name = 'Formation';
  alignement = 'center';
  couleur = 'red';
  @Input() name2: any;
  constructor() { }

  ngOnInit(): void {
  }

}
