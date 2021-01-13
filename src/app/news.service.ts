import { Injectable } from '@angular/core';
import { HttpClient , } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
   BASE_URL="http://newsapi.org/v2/top-headlines";
   key="ebd07a99ca6f4b9eb26fe97cd18b4cb9";
   newKey=["10298191f191de8c60a5837813f4aa59",
   "8abcf9498315a6bdf1b220d6c22ea5c4",
   "29aadf3132ebf681a6131743fe6fe1b0",
  "4e7647c2b971d5c78e4cebdea14e2d29",
]
   country="in";
 
  constructor(private http: HttpClient) { }

  getNews(category,key){
    
    this.BASE_URL="https://gnews.io/api/v4/search?q="+category+"&token="+key+"&lang=en"
    return this.http.get(this.BASE_URL).toPromise();
  }




}
