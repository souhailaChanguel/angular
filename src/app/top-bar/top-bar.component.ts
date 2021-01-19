import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  selectedPath = 'dashbord';


  constructor(
    private router: Router,

  ) { }
  ngOnInit(): void {
  }
  navigateTo(path: string) {
    this.selectedPath = path;
    this.router.navigate([path]);
  }
}
