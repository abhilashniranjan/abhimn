import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'abhimn';
  
  constructor(private meta: Meta, private titles:Title) { }
  
  ngOnInit(): void {
    this.titles.setTitle(this.title)
   this.meta.addTags([
     { name:"keywords", content:"portfolio, abhimn, Abhilashmn, Abhi,abhi, abhilash"},
     { name:"date", content:"2022-2-5", scheme:"YYYY-MM-DD"}
   ])

  }



}
