import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  selectedPath = 'dashboard';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * Navigate to  path
   * @param path: string
   */
  navigateTo(path: string) {
    this.selectedPath = path;
    this.router.navigate([path]);
  }

}
