import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: '../articles/3-31.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @ViewChild('dynamicTemplate', {read: ViewContainerRef}) dynamicTemplate;
  id: string;


  constructor() { 
  	//this.id = articleId;
  }

  ngOnInit() {
  }

  ngAfterViewInit(){

  }

}
