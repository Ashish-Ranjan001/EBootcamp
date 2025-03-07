import { Component,Input} from '@angular/core';
import { CommunicationComponent } from '../communication/communication.component';

@Component({
  selector: 'app-home',
  imports: [CommunicationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  count:number=0;
  childData:any;
  xyz(){
     this.count+=1;
  }
  mydata(data:any){
    this.childData=data;
 }
}
