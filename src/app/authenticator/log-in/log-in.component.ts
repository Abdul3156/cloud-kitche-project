import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {


  constructor(private fb: FormBuilder, private _http: HttpClient, private router: Router) { }

  loginform!: FormGroup


  ngOnInit(): void {

    this.loginform = this.fb.group({
      email: [""],
      password: [""]
    })
  }

  submitlogin() {
    this._http.get<any>("http://localhost:3000/signup").subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.loginform.value.email && a.password === this.loginform.value.password
      })
      if (user) {
        alert("login is successfull")
        this.loginform.reset();
        this.router.navigate(['homepage'])
      }
      else {
        alert("user not found")
      }
    }, err => {
      alert("something wrong")
    })
  }
}
