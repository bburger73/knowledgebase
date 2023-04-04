import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {

    }

    signup(body: string) {
        return this.http.post('http://192.168.0.88/user_account/create.php', body);
    }

    signin(body: string) {
        var headers = new HttpHeaders().set('access-control-allow-origin',"http://localhost/");
        return this.http.post("http://192.168.0.88/user_account/read.php", body,{headers});
    }

    forgot(body:string){
        return this.http.post("http://192.168.0.88/user_forgot/read.php", body);
    }

    resetpassword(body:string){
        return this.http.put("http://192.168.0.88/user_pass/update.php", body);
    }

    updateuser(body:string){
        return this.http.put("http://192.168.0.88/user_account/update.php", body);
    }

    presser() {
        let body = JSON.stringify({
            email: "asdf@asdf.asdf", //inEmail,
            pass: "Asdf123$", //inPass
            name: "test"
        })
        return this.http.post('http://192.168.0.88/user_account/create.php', body);
    }
    pressertwo() {
        let body = JSON.stringify({
            email: "asdf@asdf.asdf", //inEmail,
            pass: "Asdf123$", //inPass
            name: "test"
        })
        return this.http.post("http://192.168.0.88/user_account/read.php", body);
    }


}
