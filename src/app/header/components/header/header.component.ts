import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Module } from '@less/header/entity/module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  /** Liste des modules à afficher dans le bandeau du header */
  moduleList:Array<Module>=[];

  constructor(
    public router:Router,
  ) { }

  ngOnInit(): void {
    this.moduleList.push({
      name : 'home',
      imgName : 'home',
      enable : true,
      route : 'home',
    },{
      name : 'chat',
      imgName : 'chat',
      enable : true,
      route : 'chat',
    },{
      name : 'about',
      imgName : 'about',
      enable : true,
      route : 'about',
    },
    );
  }

}
