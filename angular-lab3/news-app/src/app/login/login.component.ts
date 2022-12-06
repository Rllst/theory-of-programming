import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { users, User, setAutorisation} from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {}

  username = '';
  password = '';

  ngOnInit(): void {
  }

  changeUserName(event:any){
    this.username = event.target.value;
  }

  changePassword(event:any){
    this.password = event.target.value;
  }

  tryLogIn(){
    const user = users.find(el => el.name == this.username);
    if(user){console.log('user exist'); 
      if(user.password == this.password){
        setAutorisation(user);
        alert("Вітаємо! ");
      }
    }
    else{console.log('User doesn`t exist');}
  }

}
