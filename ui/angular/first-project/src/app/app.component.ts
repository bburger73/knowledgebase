import { Component, OnInit } from '@angular/core';
import {ApiService} from './api.service';
import { faRightFromBracket,faArrowLeft,faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  countryData = Object();

  faXmark = faXmark;
  constructor(private api:ApiService) {
    
  }
  
  ngpresser() {       
    this.api.presser().subscribe((data)=>{       
      console.log(data);
      this.countryData = data;});
  }
  ngpressertwo() {       
    this.api.pressertwo().subscribe((data)=>{     
      console.log(data);  
      this.countryData = data;});
  }
  title = 'first-project';
}
