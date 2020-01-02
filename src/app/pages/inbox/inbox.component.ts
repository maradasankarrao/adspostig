import { Component, OnInit } from '@angular/core';
import{ServiesService} from 'src/app/servies.service'
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor(private main:ServiesService) { }

  ngOnInit() {
  }

}
