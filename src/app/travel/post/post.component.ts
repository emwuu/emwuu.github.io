import { Component, OnInit, ViewChild, ViewContainerRef, Input, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  template: '<div #myNgIncludeContent></div>',
  //templateUrl: '../articles/3-31.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  /*@Input('src')
  private templateUrl: string;*/

  @ViewChild('myNgIncludeContent', {read: ViewContainerRef})
  protected contentTarget: ViewContainerRef;

  private articleId;


  constructor(private componentResolver: ComponentFactoryResolver, private route: ActivatedRoute) { 
  }

  ngOnInit() {
  	    this.articleId = this.route.snapshot.params.prId;
  	    this.articleId='3-31';

  	var url = "../articles/" + this.articleId + ".html";
  	console.log(url);
  	var dynamicComponent = this.createContentComponent(url);
        this.componentResolver.resolveComponentFactory(dynamicComponent);
  }

  createContentComponent(templateUrl) {
        @Component({
            selector: 'my-ng-include-content',
            templateUrl: templateUrl
        })
        class MyNgIncludeContent {}
        return MyNgIncludeContent ;
    }

  ngAfterViewInit(){

  }

}
