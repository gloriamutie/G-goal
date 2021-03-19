import { Component } from '@angular/core';
import {Goal} from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 goals:Goal[]=[
   {id:1, name:"Read Java"},
   {id:2, name:"Understand java"},
   {id:3, name:"practise Java"},
   {id:4, name:"Do Java"},
   {id:5, name:"Live Java"},
  {id:6, name:"Earn Java"},
  {id:7, name:"Die a Java person"},
  {id:8, name:"Marry Java"},
  {id:9, name:"Travel Java"},
  {id:10, name:"Give birth to Java"}
];

}
