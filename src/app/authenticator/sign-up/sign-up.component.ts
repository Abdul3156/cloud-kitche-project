import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private fb: FormBuilder , private _http:HttpClient , private router:Router) { }

  signup!: FormGroup

  ngOnInit(): void {

    this.signup = this.fb.group({
      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  submitsignup(){
     this._http.post<any>("http://localhost:3000/signup",this.signup.value).subscribe(res=>{
      alert("registration successfully");
      this.signup.reset();
      this.router.navigate(['login'])
     }, err =>{
       alert("something wrong")
     })
     console.log(this.signup!)
  }

}