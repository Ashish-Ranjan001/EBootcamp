import { Component, Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-communication',
  imports: [],
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.css'
})
export class CommunicationComponent {
  @Input() mycount!:number;
  @Output() myevent=new EventEmitter();
  count:number=0;
  abc(){
    this.count+=1;
    this.myevent.emit(this.count);}
}
