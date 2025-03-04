import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-froms',
  imports: [FormsModule,CommonModule],
  templateUrl: './froms.component.html',
  styleUrl: './froms.component.css'
})
export class FromsComponent {
  myForm: any = {
    fullName: '',
    email: '',
    mobile: ''
  };

  sendData() {
    console.log(this.myForm);
  }
}
