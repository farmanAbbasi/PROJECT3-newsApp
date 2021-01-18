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
  workingKey: any;
  category = "sports";
  dataLoading: boolean = true;
  languageOfNews = "hi"
  selectedCategory = "headlines"
  time:any;
  searchInputValue=""
  language_array = [ { name: "Hindi", id: "hi" },{ name: "English", id: "en" }]


  constructor(public newsService: NewsService) { }

  async ngOnInit() {

    for (var i = 0; i < this.newsService.newKey.length; i++) {
      console.log(i)
      try {
        this.data = await this.newsService.getNews(this.selectedCategory, this.newsService.newKey[i], this.languageOfNews);
        console.log(this.data)
        this.news = this.data.articles;
        this.workingKey = this.newsService.newKey[i]
        console.log(this.news)
        this.dataLoading = false;
        return;
      }
      catch (e) {
        console.log("key ", i, " did not work")
      }


    }

  }
  onChangeLanguage(val) {
    this.languageOfNews = val;
    this.changeCategory(this.selectedCategory)
  }



  async changeCategory(cate) {
    this.selectedCategory = cate
    this.searchInputValue=""
    if (cate == "headlines") {
      this.dataLoading = true;
      this.data = await this.newsService.getNewsHeadlines(cate, this.workingKey, this.languageOfNews);
      console.log(this.data)
      this.news = this.data.articles;
      console.log(this.news)
      this.dataLoading = false;
    }
    else {
      this.dataLoading = true;
      this.data = await this.newsService.getNews(cate, this.workingKey, this.languageOfNews);
      console.log(this.data)
      this.news = this.data.articles;
      console.log(this.news)
      this.dataLoading = false;
    }
  }

  onKeyOnInput(value) {
  
   clearTimeout(this.time);
   this.time=setTimeout(()=>{
    this.changeCategory(value)
   },1500)
      
    
    

  }



}
