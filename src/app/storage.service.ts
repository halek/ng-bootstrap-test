import {Injectable} from '@angular/core';

declare var chrome : any;

@Injectable()
export class StorageService {

  private data = [];

  constructor() {
    this.data = [];
  }

  findAll = function (callback) {
    chrome
      .storage
      .sync
      .get('todo', function (keys) {
        if (keys.todo != null) {
          this.data = keys.todo;
          for (var i = 0; i < this.data.length; i++) {
            this.data[i]['id'] = i + 1;
          }
          console.log(this.data);
          callback(this.data);
        }
      });
  }

  sync = function () {
    chrome
      .storage
      .sync
      .set({
        todo: this.data
      }, function () {
        console.log('Data is stored in Chrome storage');
      });
  }

  add = function (newContent) {
    var id = this.data.length + 1;
    var todo = {
      id: id,
      content: newContent,
      completed: false,
      createdAt: new Date()
    };
    this
      .data
      .push(todo);
    this.sync();
  }

  remove = function (todo) {
    this
      .data
      .splice(this.data.indexOf(todo), 1);
    this.sync();
  }

  removeAll = function () {
    this.data = [];
    this.sync();
  }

}
