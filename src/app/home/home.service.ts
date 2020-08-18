import { Injectable } from '@angular/core';
//declare var environment: any;
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ServiceDataService } from '../../services/service';

@Injectable()
export class HomeService {
  constructor(private apiService: ServiceDataService, private http: HttpClient){ }

  getData(){
    return this.apiService.getDataPromise("GET", environment.BASE_API_URL, {}, {}, {} )
  }

  searchData(data){
    return this.apiService.getDataPromise("GET", environment.BASE_API_URL+"/"+data, {}, {}, {} )
  }

  regionData(data){
    return this.apiService.getDataPromise("GET", environment.BASE_API_URL+"/filterBy/"+data, {}, {}, {} )
  }

}
