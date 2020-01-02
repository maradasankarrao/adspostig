import { Component, OnInit } from '@angular/core';
import{ServiesService} from 'src/app/servies.service'
@Component({
  selector: 'app-myads',
  templateUrl: './myads.component.html',
  styleUrls: ['./myads.component.css']
})
export class MyadsComponent implements OnInit {

  constructor(private main:ServiesService) { }

  ngOnInit() {
  }

}
