import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { Chat } from '../../entity/chat';
import { ChatService } from '../../service/chat.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.less']
})
export class ChatListComponent implements OnInit {

  constructor(
    public chatService:ChatService,
  ) { }
  ngOnInit(): void {
    this.clearChatList();
    if(environment.launchChatTest)
     this.testChat();
  }

  /** Permet de réinitialiser les boites de chat */
  clearChatList():void {
    this.chatService.clearMessageList();
  }

  /** Permet de lancer un test automatique de dialogue */
  testChat():void {
    this.chatService.testChat();
  }

}
