import { Component, Input, OnInit } from '@angular/core';
import { Chat } from '../../entity/chat';
import { ChatService } from '../../service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit {
  @Input() chat!:Chat;
  /** Message saisie à envoyer via le chat */
  text:string= "";
  /** Nom de l'utilsiateur qui est saisie */
  userName:string = "";

  constructor(
    public chatService:ChatService,
  ) { }

  ngOnInit(): void {
  }
  isInit():boolean {
    return this.chat.user.id != null;
  }
  /** Initialise le chat avec le nom de l'utilisateur saisir */
  initiateUserChat():void {
    if(this.userName)
    {
      this.chat.user = { id : 1, name : this.userName}
    }
  }

  /** Ajoute un message pour l'utilisateur du chat */
  addMessage():void
  {
    if(this.text)
    {
      this.chatService.addMessage({id:1 , message:this.text, from:this.chat.user, date:new Date});
      this.text = "";
    }
  }

}
