import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  
  constructor(private route:Router,private tost:ToastrService) { }

  ngOnInit(): void {
  }

  about(){
   this.route.navigate(["/about"]);
   this.tost.info("successfull about Page");
  }

  port(){
    this.route.navigate(["/portfolio"]);
    this.tost.success("successfull portfolio Page");
  }

  service(){
    this.route.navigate(["/service"]);
    this.tost.success("successfull service Page");
  }

  contact(){
    this.route.navigate(["/contact"]);
    this.tost.info("successfull contact Page");
  }

}
