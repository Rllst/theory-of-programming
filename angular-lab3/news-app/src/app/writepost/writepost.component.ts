import { Component, OnInit } from '@angular/core';
import { News, pushNewsPost } from '../news.model';
import { currentUser, autorisation } from '../user.model';

@Component({
  selector: 'app-writepost',
  templateUrl: './writepost.component.html',
  styleUrls: ['./writepost.component.css']
})
export class WritepostComponent implements OnInit {

  autorisation = autorisation;

  constructor() { }

  title: string = '';
  text: string = '';
  img: string = '';
  post: News = { autor:currentUser.name, title:this.title, text:this.text, imgUrl: this.img };


  ngOnInit(): void {
  }

  changeTitle (event:any){
    console.log(event.target.value);
    this.post.title = event.target.value;
    this.title = event.target.value;
  }

  changeText (event:any){
    this.post.text = event.target.value;
  }

  changeImg (event:any){
    this.post.imgUrl = event.target.value;
  }

  addPost(){
    if((this.post.imgUrl === '') || (this.post.text === '') || (this.title === ''))
    {
      console.log(this.post.imgUrl === '');
      console.log(this.post.text === '');
      console.log(this.title === '', this.title);
      alert('Заповніть всі поля будь ласка!');
    }
    else{
      const IMG = new Image();
      IMG.src = this.img;

      if (IMG.onerror){
        alert('Фото не знайдено');
      }

      pushNewsPost(this.post);

      alert('Статтю додано.');


    }
  }


}
