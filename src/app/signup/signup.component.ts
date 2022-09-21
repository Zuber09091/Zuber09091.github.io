import { NgIfContext } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  data = [
    {cname:'Bangalore',sname:'Andra Pradesh',countries:'India',occupation:'Manager',count:'0-1 Year'},
    {cname:'Chennai',sname:'Madhya Pradesh',countries:'USA',occupation:'TL',count:'1-3 Year'},
    {cname:'Mumbai',sname:'Mahashatra',countries:'South-Africa',occupation:'SM',count:'3-5 Year'},
    {cname:'Pune',sname:'Karnataka',countries:'UAE',occupation:'GM',count:'5-8 Year'},
    {cname:'Hyderabad',sname:'GOA',countries:'Russia',occupation:'Developer',count:'8-10 Year'},
    {cname:'Other',sname:'Uttar Pradesh',countries:'Canada',occupation:'Tester',count:'10+ Year'},
    {cname:'',sname:'Bihar',countries:'UK',occupation:'Sales',count:''},
  ];
details !: FormGroup

  constructor(private formbuilder:FormBuilder,private http:HttpClient) { }


  ngOnInit(): void {
    this.details=this.formbuilder.group({
      email:['',Validators.required],
      name:['',Validators.required],
      mobile:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      pincode:['',Validators.required],
      country:['',Validators.required],
      company:['',Validators.required],
      occp:['',Validators.required],
      exp:['',Validators.required],
    })
  }
  onSave(){
    this.http.post<any>('http://localhost:3000/users',this.details.value).subscribe(res=>{
      alert('Successfully');
    }) 
    this.details.reset()
   }
  onClear(){
      this.details.reset()
  }

}
