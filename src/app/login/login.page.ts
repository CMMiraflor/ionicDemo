import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  public form = {
    email_address: "",
    password: ""
  }

  ngOnInit() {

  }

  print(){
    console.log(this.form);
  }

}
