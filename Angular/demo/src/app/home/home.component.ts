import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 title:any="Ashish Ranjan"
 info:any="lorem sjcv ajxcb ajvxbc jabx ajbx ajxb awbx ajkxb habcxm ahxda abdkjsajb ajdb jahbhxd jhbax jabx jabx jasbd jabsd jbad "
 imagepath:any="https://picsum.photos/200/300"
status:boolean=true;
xyz(){
  this.status =! this.status;
};

}
