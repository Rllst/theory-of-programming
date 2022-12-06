import { Component, OnInit } from '@angular/core';
import { User, currentUser, autorisation, logout} from '../user.model';
import { News, news } from '../news.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {

  constructor() { }  

  user = currentUser;
  userPosts: News [] = news.filter( i => i.autor == this.user.name);
  autorisation = autorisation;
  
  ngOnInit(): void {
  }

  logout() {
    logout()
    alert('Ви вийшли.');
  }

}
