import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceDataService } from '../../services/service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  country:string;

  constructor(private route: Router, private service: ServiceDataService) { }

  ngOnInit(): void {
  }

  home(){
    this.route.navigate(["/home"]);
  }

  shop(){
    this.route.navigate(['/aboutUs']);
  }

  magzine(){
    this.route.navigate(['/contact']);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

 

}
