import { Component, OnInit } from '@angular/core';
import {ApiService} from './../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  countryData = Object();
  constructor(private api:ApiService,private router: Router) {}
  ngOnInit(): void {
  }

  signup(){
    let body = JSON.stringify({
        email: "test1@example.asdf", //inEmail,
        pass: "Asdf123$", //inPass
        name: "test"
    })
    this.api.signup(body).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/dashboard-component']
      );
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
