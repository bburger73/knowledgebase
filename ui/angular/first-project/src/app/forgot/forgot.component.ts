import { Component, OnInit } from '@angular/core';
import {ApiService} from './../api.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  countryData = Object();
  constructor(private api:ApiService) {}
  ngOnInit(): void {
  }

  forgot(){
    let body = JSON.stringify({email:document.getElementById('email')?.nodeValue})
    this.api.forgot(body).subscribe((data) => {    
      console.log(data);
    })
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
