import { Injectable } from '@angular/core';
import { Chat } from '../entity/chat';
import { ChatParam } from '../entity/chatParam';
import { Message } from '../entity/message';
import { loremIpsum, LoremIpsum } from "lorem-ipsum";
import { GlobalService } from '@less/core/services/global.service';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  /** Liste des messages échangés dans l'application */
  messageList: Array<Message> = [];
  /** Paramétre de la partie chat de l'application */
  chatParam:ChatParam;
  /** Liste des chats */
  chatList!:Array<Chat>;
  /** Classe permettant de généré automatique du texte */
  lorem!:LoremIpsum;

  constructor(
    private globalService:GlobalService,
  ) {
    // Initialisation des paramétres des chats
    this.chatParam = {
      maxSentence:environment.maxSentence,
      maxWord:environment.maxWord,
      minSentence:environment.minSentence,
      minWord:environment.minWord,
      chatNumber:environment.chatNumber,
      testMessageNumber:environment.testMessageNumber
    }
    // Initialisation des paramétre de génération de phrases Lorem Ipsum
    this.lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: this.chatParam.maxSentence,
        min: this.chatParam.minSentence
      },
      wordsPerSentence: {
        max: this.chatParam.maxWord,
        min: this.chatParam.minWord
      }
    });
    
   }

   /** Ajoute un message à la liste des messages */
   addMessage(message:Message):void
   {
    this.messageList.push(message);
   }
   /** Permet de viderr la liste de message */
   clearMessageList():void
   {

    this.chatList = [];
    for (let index = 0; index < this.chatParam.chatNumber; index++) {
      this.chatList.push(
        {
          id : index,
          user : { },
        }
      )
    }
    this.messageList = [];
   }

   /** Génère un test de plusieurs mesage entre les chats */
   testChat():void
   {
    // On vide et initialise d'abord la liste des chats
    this.chatList = [];    
    for (let index = 0; index < this.chatParam.chatNumber; index++) {
      this.chatList.push(
        {
          id : index,
          user : { id :index , name: 'name' + index},
        }
      )
    }
    // Puis on vide et rempli la liste de message échangé
    this.messageList = []
    for (let messageIndex = 0; messageIndex < this.chatParam.testMessageNumber; messageIndex++) {
      this.messageList.push({
        id:messageIndex,
        message:this.lorem.generateSentences(),
        date:new Date,
        from: this.chatList[this.globalService.randomIntFromInterval(0,this.chatParam.chatNumber-1)].user
      });      
    }
   }
}
