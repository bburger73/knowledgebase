import { Component, OnInit } from '@angular/core';
import {ApiService} from './../api.service';
import { faRightFromBracket,faArrowLeft,faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  countryData = Object();
  constructor(private api:ApiService) {}
  ngOnInit(): void {
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
}
