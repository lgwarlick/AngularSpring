import {Component} from "@angular/core";
import {User} from "../model/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../service/user.service";


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {


  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.user = new User();
  }

  //using the .save method of User Service
  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  //after a new user is added, return to /users to show updated list
  gotoUserList() {
    this.router.navigate(['/users']);
  }


}
