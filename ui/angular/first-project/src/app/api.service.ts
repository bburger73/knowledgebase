import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor (private http:HttpClient) {
    
  }

  presser(){
    let body = JSON.stringify({
      email:"asdf@asdf.asdf", //inEmail,
      pass:"Asdf123$", //inPass
      name:"test"
    })
    return this.http.post('http://localhost/user_account/create.php',body); 
  }
  pressertwo(){
    let body = JSON.stringify({
      email:"asdf@asdf.asdf", //inEmail,
      pass:"Asdf123$", //inPass
      name:"test"
    })
    return this.http.post("http://localhost/user_account/read.php",body); 
  }
  

}
