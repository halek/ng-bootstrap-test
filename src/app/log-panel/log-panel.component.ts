import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-log-panel',
  templateUrl: './log-panel.component.html',
  styleUrls: ['./log-panel.component.css']
})
export class LogPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

      /** return date e hora corrente */
    getDateTime() {
        return moment().format('YYYY-MM-DD HH:MM:ss :');
    }

}
