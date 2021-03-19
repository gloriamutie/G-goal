import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 goals:string[];

 constructor(){
   this.goals=["Read Java","Understand java","practise Java","Do Java","Live Java",
               "Earn Java","Die a Java person","Marry Java","Travel Java","Give birth to Java"];
 }
}
