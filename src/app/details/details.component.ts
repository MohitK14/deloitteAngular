import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../../services/service';
import { HomeService } from '../home/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  dataId;
  detailList:any;
  dataList:any;
  constructor( private service: ServiceDataService, private apiService: HomeService, private router: Router) 
  {
    
    this.dataId = this.service.getData();
    console.log(this.dataId);
    this.getDataList();
   }

  ngOnInit(): void {

  }

  getDataList(){

    this.apiService.getData().subscribe(res=>{
      console.log(res);
        this.detailList = res;
        this.dataList = this.detailList.find(x=> x.id == this.dataId.id);
        console.log(this.dataList);
    });
  }

  back(){
    this.router.navigate(['/home'])
  }

}
