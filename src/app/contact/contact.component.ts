import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  //Images Link-------------------------------------------------------------------
  contactus:string = "assets/images/social/contactus.jpg";
  jazz2:string = "assets/images/social/jazz2.jfif";
  whatsapp:string = "assets/images/social/whatsapp.png";
  fb:string = "assets/images/social/fb.png";
  gmail:string = "assets/images/social/gmail.jpg";
  instagram:string = "assets/images/social/instagram.png";

  facebookMobile:string = "assets/images/social/facebookMobile.png";
  instagramMobile:string = "assets/images/social/instagramMobile.png";

  comma1:string = "assets/images/photoPage/comma1.png";
  comma2:string = "assets/images/photoPage/comma2.png";

  thought:string = "assets/images/social/thought.png";
  //===============================================================================
  // Social Media Links-----------------------------------------------------
  instagramAccount:string = "https://www.instagram.com/chanshal_camp/";
  facebookAccount:string = "https://www.facebook.com/chanshaladventurecamp/";
  
  constructor() { }

  ngOnInit(): void {
  }
}
