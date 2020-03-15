import { Injectable } from '@angular/core';
import { HttpClient , } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
   BASE_URL="http://newsapi.org/v2/top-headlines";
   key="ebd07a99ca6f4b9eb26fe97cd18b4cb9";
   country="in";
 
  constructor(private http: HttpClient) { }

  getNews(category){
  return this.http.get("https://cors-anywhere.herokuapp.com/"+this.BASE_URL+"?country="+this.country+"&category="+category+"&apiKey="+this.key)
  .toPromise();
  }

}
