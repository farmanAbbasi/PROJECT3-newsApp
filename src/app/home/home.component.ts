import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../news.service';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;
  news: [];
  workingKey:any;
  category="sports";
  dataLoading:boolean=true;


  constructor(public newsService: NewsService) { }

 async ngOnInit() {
   for(var i=0;i < this.newsService.newKey.length;i++){
     console.log(i)
     try{
      this.data = await this.newsService.getNews("sports",this.newsService.newKey[i]);
      console.log(this.data)
      this.news = this.data.articles;
      this.workingKey=this.newsService.newKey[i]
      console.log(this.news)
      this.dataLoading=false;
      return;
     }
     catch(e){
       console.log("key ",i," did not work")
     }
    
    
   }
  
  }



 async changeCategory(cate){
   this.dataLoading=true;

    this.data = await this.newsService.getNews(cate,this.workingKey);
    console.log(this.data)
    this.news = this.data.articles;
    console.log(this.news)
    this.dataLoading=false;
  }

  onKeyOnInput(value){
    console.log(value)
    this.changeCategory(value)

  }



}
