import { Component, OnInit } from '@angular/core';
import { News, news } from '../news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  newslist = news;

  reverseNewsList (news : News [] = this.newslist){
    this.newslist = news.reverse();
  }

}

