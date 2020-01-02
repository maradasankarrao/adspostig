import { Component, OnInit } from '@angular/core';
import{ServiesService} from 'src/app/servies.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private main:ServiesService) { }

  ngOnInit() {
  }

}
