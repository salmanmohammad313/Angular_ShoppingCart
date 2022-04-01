import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
//Subj it's a mechanism of trigger some thing and  listening 
@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  subject = new Subject()
  constructor() { }
  sendMsg(product) {
    console.log(product)
    this.subject.next(product)//triggering an enent

  }
  getMsg() {

    return this.subject.asObservable()
  }
}
