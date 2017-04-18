import {Component, OnInit} from '@angular/core';
import {StorageService} from './storage.service';
import {LogPanelComponent} from './log-panel/log-panel.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [StorageService, LogPanelComponent]
})
export class AppComponent implements OnInit {

    constructor(private logPanelComponent : LogPanelComponent) {};

    ngOnInit() {
        //this.logPanelComponent

    }

    AddMsg() {
        this
            .logPanelComponent
            .add('Teste');
    }
}