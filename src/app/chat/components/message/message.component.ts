import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../entity/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less']
})
export class MessageComponent implements OnInit {

  /** Message à afficher*/
  @Input() message!:Message;
  /** Définit si le message est celui de ma boite de chat ou pas */
  @Input() IsMine:boolean = false;
  constructor() {
  }

  ngOnInit(): void {
  }

}
