import { Component, OnInit } from '@angular/core';
import{ServiesService} from 'src/app/servies.service'

@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.component.html',
  styleUrls: ['./itempage.component.css']
})
export class ItempageComponent implements OnInit {

  constructor(private main:ServiesService) { }
 item=[]
  ngOnInit() {
    this.item=Object.values(this.main.moterbickesproducts)
    // this.item.params.subscribe(p => {
    //   if(Object.keys(p).length===0){
    //        this.local = this.laptops['a1']['dicripation'];
    //       }
    //        else{
    //       this.local = this.laptops[p.id]['dicripation'];

//   }
// });



}
}
