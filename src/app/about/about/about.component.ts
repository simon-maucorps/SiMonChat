import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  aboutLink:string = environment.aboutLink;
  constructor() { }

  ngOnInit(): void {
    
  }

}
