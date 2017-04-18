import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import { LogPanelComponent } from './log-panel/log-panel.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent, NavComponent, FooterComponent, LogPanelComponent, LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}