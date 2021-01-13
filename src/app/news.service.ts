import { Injectable } from '@angular/core';
import { HttpClient , } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
   BASE_URL="http://newsapi.org/v2/top-headlines";
   key="ebd07a99ca6f4b9eb26fe97cd18b4cb9";
   newKey=["10298191f191de8c60a5837813f4aa59","29aadf3132ebf681a6131743fe6fe1b0","424cdb9a7893e6602eaff8767e09a0a7","090b117476554513e91e59f2b956561b","4d26660ac372650f9d333f08314f2fa0","0bf43a7b8936fb602968f73e235cc463","5e4a12c068c6d4ee2d2078c903bb2902"]
   country="in";
 
  constructor(private http: HttpClient) { }

  getNews(category,key){
    
    this.BASE_URL="https://gnews.io/api/v4/search?q="+category+"&token="+key+"&lang=en"
    return this.http.get(this.BASE_URL).toPromise();
  }




}
