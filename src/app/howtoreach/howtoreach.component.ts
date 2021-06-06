import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-howtoreach',
  templateUrl: './howtoreach.component.html',
  styleUrls: ['./howtoreach.component.css']
})
export class HowtoreachComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  howtoreach:string = "assets/images/ch.png";
  flightOpenState = false;
  busOpenState = false;
  trainOpenState = false;
  howtoreachend:string = "assets/images/howtoreachend.jfif";

}
