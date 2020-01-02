import { Component, OnInit } from '@angular/core';
import{ServiesService} from 'src/app/servies.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private main:ServiesService) { }
products=[]
  ngOnInit() {
this.products=Object.values(this.main.moterbickesproducts)
  }

}
