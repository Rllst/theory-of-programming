import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { News } from '../news.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent{

  @Input() item: News = {autor:'', title:'', text:'',imgUrl:''} ;

}
