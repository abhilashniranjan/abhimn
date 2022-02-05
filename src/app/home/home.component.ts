import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  count:number = 0
  constructor() { }

  ngOnInit(): void {
    this.updateVisitCount();
  }


 updateVisitCount() {
      fetch("https://api.countapi.xyz/update/Cresy-Animal/youtube/?amount=1")
      .then(res => res.json())
     .then(res => {
         this.count  = res.value;
      }) 
  }
   


}
