import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from 'src/model/user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(public router: Router, public api: ApiService, public formBuilder: FormBuilder) { }

  userForm: FormGroup;
  ngOnInit() {
  	this.userForm = new FormGroup({
  'name': new FormControl(null),
  'email': new FormControl(null),
  'login': new FormControl(null),
  'password': new FormControl(null)
});

  }

  addUser(form: NgForm) {
    this.api.addUser(form)
      .subscribe(res => {
          this.router.navigate(['/index']);
        }, (err) => {
          console.log(err);
        });
  }
}
