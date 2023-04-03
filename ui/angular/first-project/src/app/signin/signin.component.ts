import { Component, OnInit } from '@angular/core';
import {ApiService} from './../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  countryData = Object();
  constructor(private api:ApiService,private router: Router) {}
  ngOnInit(): void {
  }

  signin(){
    let body = JSON.stringify({
      email: "asdf@asdf.asdf", //inEmail,
      pass: "Asdf123$", //inPass
    })
    this.api.signin(body).subscribe((data)=>{    
      console.log(data);
      this.router.navigate(['/dashboard-component']);
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
