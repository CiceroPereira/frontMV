import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from 'src/model/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id: number = null;
  productForm: FormGroup;
  name: String = '';
  email: String = '';
  login: String = '';
  password: String = '';

  constructor(public router: Router, public api: ApiService, public formBuilder: FormBuilder, private route: ActivatedRoute) { }

  userForm: FormGroup;
  ngOnInit() {
  this.userForm = new FormGroup({
  'id': new FormControl(null),
  'name': new FormControl(null),
  'email': new FormControl(null),
  'login': new FormControl(null),
  'password': new FormControl(null)
  });
  	this.getUser(this.route.snapshot.params['id']);

 }

 getUser(id) {
  this.api.getUser(id).subscribe(data => {
    this.id = data.id;
    this.userForm.setValue({
      id: data.id,
      name: data.name,
      email: data.email,
      login: data.login,
      password: data.password
    });
  });

  }

  updateUser(form: NgForm) {
  this.api.updateUser(form)
    .subscribe(res => {
        this.router.navigate(['index']);
      }, (err) => {
        console.log(err);
 
      }
    );
}

}
