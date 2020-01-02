import { Component, OnInit } from '@angular/core';
import{ServiesService} from 'src/app/servies.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private main:ServiesService) { }

  ngOnInit() {
  }

}
