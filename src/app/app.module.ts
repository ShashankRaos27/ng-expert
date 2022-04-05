import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { LoginComponent } from './login/login.component';
import { RegulatorComponent } from './regulator/regulator.component';
import { ListComponent } from './list/list.component';
import { IfComponent } from './if/if.component';
import { SwitchComponent } from './switch/switch.component';
import { ParentItemComponent } from './parent-item/parent-item.component';
import { ChildItemComponent } from './child-item/child-item.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ChildListComponentComponent } from './child-list-component/child-list-component.component';
import { ParentListComponentComponent } from './parent-list-component/parent-list-component.component';
import { JobListParentComponent } from './job-list-parent/job-list-parent.component';
import { JobListChildComponent } from './job-list-child/job-list-child.component';
import { JobChildComponent } from './job-child/job-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainAreaComponent,
    LoginComponent,
    RegulatorComponent,
    ListComponent,
    IfComponent,
    SwitchComponent,
    ParentItemComponent,
    ChildItemComponent,
    ContactComponent,
    ContactListComponent,
    ChildListComponentComponent,
    ParentListComponentComponent,
    JobListParentComponent,
    JobListChildComponent,
    JobChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
