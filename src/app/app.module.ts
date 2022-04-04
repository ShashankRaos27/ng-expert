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
    SwitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
