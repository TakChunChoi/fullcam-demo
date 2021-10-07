import { Component, OnInit, ViewChildren } from '@angular/core';
import { fadeAnimation } from '../shared/animations';
import { FormTypes } from './models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeAnimation]
})
  

  
export class LoginComponent implements OnInit {
  
  @ViewChildren('')
  public formType:FormTypes = "login"
  
  
  constructor() { }

  ngOnInit(): void {
  }


  public changeFormType(formType:FormTypes) {
    this.formType = formType;
  }
}
