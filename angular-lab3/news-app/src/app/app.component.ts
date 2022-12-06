import { Component, OnInit, HostListener } from '@angular/core';
import { News, news } from './news.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})


export class AppComponent implements OnInit{

  public screenWidth: any;

  ngOnInit(){
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

}
