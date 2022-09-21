import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login !: FormGroup
  constructor(private forbuilder: FormBuilder, private user: UserdataService, private http: HttpClient) {
    this.user.getData().subscribe(data => {
      console.log(data)
    })
  }
  ngOnInit(): void {
    this.login = this.forbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onLogin() {
    this.http.get<any>('http://localhost:3000/users').subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.login.value.email || a.password === this.login.value.password
      })
      if (user) {
        alert('Successfully Login')
        this.login.reset();
      }
    })
  }


}
