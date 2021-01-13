import { Injectable } from '@angular/core';
import { HttpClient , } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
   BASE_URL="http://newsapi.org/v2/top-headlines";
   key="ebd07a99ca6f4b9eb26fe97cd18b4cb9";
   newKey="10298191f191de8c60a5837813f4aa59"
   country="in";
 
  constructor(private http: HttpClient) { }

  getNews(category){
    this.BASE_URL="https://gnews.io/api/v4/search?q="+category+"&token="+this.newKey+"&lang=en"
  return this.http.get(this.BASE_URL).toPromise();
  }


  getNewsNe

}
