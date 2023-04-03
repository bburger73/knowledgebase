import { Component, OnInit } from '@angular/core';
import {ApiService} from './../api.service';
import { faRightFromBracket,faGear, faG} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  countryData = Object();
  faRightFromBracket = faRightFromBracket;
  faGear = faGear;
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
