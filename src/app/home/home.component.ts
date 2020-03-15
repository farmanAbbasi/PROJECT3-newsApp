import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;
  news: [];
  newsValue1 = [];
  newsValue2 = [];
  newsValue3 = [];
  newsValue4 = [];
  category="sports";
  dataLoading:boolean=true;


  constructor(public newsService: NewsService) { }

 async ngOnInit() {
  this.data = await this.newsService.getNews("sports");
  console.log(this.data)
  this.news = this.data.articles;
  console.log(this.news)
  let lengthOfdata = this.news.length;// if 20
  let lengthOfDataInEachBucket = lengthOfdata / 4; //so 20/4 =5 in each bucket
  this.partitioningDataInto4Buckets(lengthOfdata, lengthOfDataInEachBucket)
  this.dataLoading=false;
  }

  partitioningDataInto4Buckets(lengthOfdata, lengthOfDataInEachBucket) {
    var j = 0
    for (let i = 0; i < lengthOfdata; i++) {
      if (i % lengthOfDataInEachBucket == 0) {
        j += 1
      }
      if (j == 1) {
        this.newsValue1.push(this.news[i]);
      }
      else if (j == 2) {
        this.newsValue2.push(this.news[i]);

      }
      else if (j == 3) {
        this.newsValue3.push(this.news[i]);

      }
      else {
        this.newsValue4.push(this.news[i]);

      }


    }
    // console.log(this.newsValue1)
    // console.log(this.newsValue2)
    // console.log(this.newsValue3)
    // console.log(this.newsValue4)
  }

 async changeCategory(cate){
   this.dataLoading=true;
  this.newsValue1 = [];
  this.newsValue2 = [];
  this.newsValue3 = [];
  this.newsValue4 = [];
    this.data = await this.newsService.getNews(cate);
    console.log(this.data)
    this.news = this.data.articles;
    console.log(this.news)
    let lengthOfdata = this.news.length;// if 20
    let lengthOfDataInEachBucket = lengthOfdata / 4; //so 20/4 =5 in each bucket
    this.partitioningDataInto4Buckets(lengthOfdata, lengthOfDataInEachBucket)
    this.dataLoading=false;
  }



}
