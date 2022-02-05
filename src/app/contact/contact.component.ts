import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ame:string=""
  umber:string=""
  ail:string=""
  assWord:string=""

  constructor(private toster:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.toster.success("your request was sent successfully")
    form.reset()
  }
  
}
