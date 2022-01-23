import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  message: any[] = [];
  constructor() {}
  getData(msg: any): void {
    this.message.push(msg);
    //this.message=msg;
    //this.log.check(msg);
  }
  callData(): any {
    return this.message;
  }
}
