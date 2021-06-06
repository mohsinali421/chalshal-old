import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tourpackage',
  templateUrl: './tourpackage.component.html',
  styleUrls: ['./tourpackage.component.css']
})
export class TourpackageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tour:string = "assets/images/tourpackages.jpg";
  end:string = "assets/images/tourpackages-end.png";

}
