import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatComponent } from './components/chat/chat.component';
import { MessageComponent } from './components/message/message.component';
import { FormsModule } from '@angular/forms';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { CoreModule } from '@less/core/core.module';



@NgModule({
  declarations: [
    ChatListComponent,
    ChatComponent,
    MessageComponent,
    DateAgoPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule
  ],
  exports: [
    ChatListComponent,
  ]
})
export class ChatModule { }
