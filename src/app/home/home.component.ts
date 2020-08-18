import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { ServiceDataService } from '../../services/service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router, private apiService: HomeService, private service: ServiceDataService) { }

  country: string;
  listData: any;
  erroMsg;
  errorMsgFlag: boolean;
  region:string ="";
  searchForm: FormGroup;

  regionList=[
    {key:"all", value:"All"},
    {key:"america", value:"Americas"},
    {key:"asia", value:"Asia"},
    {key:"europe", value:"Europe"}
]

  ngOnInit(): void {

    this.searchForm = new FormGroup({
      country: new FormControl(''),
    })

    this.getData();
  }

  getData(){
    this.apiService.getData().subscribe(res=>{
      console.log(res);
      this.listData = res;
    },err => {
      this.erroMsg ="Something went wrong";
  });
  }

  onRegionChange(){
    // this.getList();
     let value = this.region;

     if(value=="all"){
       this.getData();
     }
     else{
       //console.log("hi");
      this.getRegionList(value)
     }
  }

  getRegionList(data){
    
    this.apiService.regionData(data).subscribe(res=>{
      this.errorMsgFlag = false;
      console.log(res);
      this.listData = res[0];
    },err => {
      this.erroMsg ="Something went wrong";
      });
    
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getDetails(data){
  console.log(data);
    this.service.setData({
      id: data
    });
    this.route.navigate(['/details', data])
  }

  onSubmit(){

    let value = this.capitalizeFirstLetter(this.country.trim());
    if (value.length>0) {
      
    let id = this.listData.find(x=> x.name == value) ? this.listData.find(x=> x.name == value).id :null;
    console.log(id);  
    if(id!=null){
      this.apiService.searchData(id).subscribe(res=>{
        this.errorMsgFlag = false;
        console.log(res);
        this.listData = res;
      },err => {
        this.erroMsg ="Something went wrong";
        });
      }

      else{
        this.errorMsgFlag = true;
      }

    }
    else{
      this.getData();
      this.errorMsgFlag = false;
    }
  }

}
