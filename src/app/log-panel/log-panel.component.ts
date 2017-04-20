import {Component, OnInit,  Input} from '@angular/core';
import * as moment from 'moment';
import {StorageService} from '../storage.service';

@Component({selector: 'app-log-panel', templateUrl: './log-panel.component.html', styleUrls: ['./log-panel.component.css'], providers: [StorageService]})
export class LogPanelComponent implements OnInit {

  constructor(private storageService : StorageService) {}

  ngOnInit() {
    this.add("Log Inicializado");
  }

  private logData = "";

  getLogData() {
    return this.logData;
  }

  /** return date e hora corrente */
  private getDateTime() {
    return moment().format('YYYY-MM-DD HH:MM:ss: ');
  }

  public add(text) {
    let newLog = this.getDateTime() + text + '\n' + this.logData;
    this.logData = newLog;
  }

}
