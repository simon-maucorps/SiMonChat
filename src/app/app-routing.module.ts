import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { ChatListComponent } from './chat/components/chat-list/chat-list.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'chat', component: ChatListComponent },
  { path: 'home', component: IndexComponent },
  { path: '', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
