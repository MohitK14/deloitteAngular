import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {

  private resData: any;
    list: any = [];
    constructor(private http: HttpClient) { }
    /**Error Handling on request*/
    private handleError(err: HttpErrorResponse) {
      return Observable.throw(err.message);
    }

    form: {
      id: number,
    };
  
    setData(x){
      this.form = x;
    }
  
    
    getData(): any {
      return this.form;
    }

  getDataPromise(method: string, action: string, data: any, params?: any, header?:any) {
    //this.startLoader()
    let opts = {}
    opts = {headers: header, params: params}
    let url = action;
    method = method.toUpperCase();
    switch (method) {
        case 'GET':
            this.resData = this.http.get(url, opts).pipe(map((res: Response) => res)),catchError(this.handleError);
            break;
        case 'POST':
            this.resData = this.http.post(url, data, opts).pipe(map((res: Response) => res)),catchError(this.handleError);
            break;
        case 'DELETE':
            this.resData = this.http.delete(url, opts).pipe(map((res: Response) => res)),catchError(this.handleError);
            break;
    }
    return this.resData;
    
}
catchError(e){
    console.log(e);
}
}


