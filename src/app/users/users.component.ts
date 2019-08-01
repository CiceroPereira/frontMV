import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from 'src/model/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private api: ApiService, public router: Router) { }

  dataSource: User[];

  ngOnInit() {
  	this.api.getUsers()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
    }, err => {
      console.log(err);
    });
  }

  deleteUser(id) {
    this.api.deleteUser(id)
      .subscribe(res => {
    	this.dataSource = this.dataSource.filter(res => res.id != id);
          this.router.navigate(['index']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
