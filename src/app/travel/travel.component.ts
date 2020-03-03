import { Component, OnInit } from '@angular/core';
import { Injectable, Renderer2, ViewEncapsulation} from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TravelComponent implements OnInit {
  @ViewChild('pic') el:ElementRef;
  @ViewChild('totalcal') cal:ElementRef;
  @ViewChild('month') mn: ElementRef;
  @ViewChild('title') title: ElementRef;
  public posts:Array<{title: string, date: string, img: string}>;
  public calPosts: {};
  public curMonth: number;
  public curYear: string;
  public monthYear: string;
  public i: number;
  public monthsDict: {};

  public safeURL: any; 
	
  constructor(private rd: Renderer2, private _sanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute) { 
    //this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/a28vD_r6L8o");
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.youtube.com/embed/a28vD_r6L8o?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=a28vD_r6L8o");
  }

  ngOnInit() {
  	this.calPosts = {
  		'03-2018': { 'posts': [
  					{'title': 'To Japan!', 'date': '03-26-2018', 'img': 'https://lh3.googleusercontent.com/JZtLBNZe7yJ8K7EEcnkuvxCMd3jqBL4rzmWsNamQcyEEkP2YE0cn7aVhp79rY2s_Ipe7lotGLfwhvy-vvyx1DEAZ6kSRXGdpPrDWL6SBswjB7-r6Wp_49WHG_ufHoLtkIUs1YqeC5A=w2400'},
	  				{'title': 'Cherry Blossoms at International Christian University', 'date': '03-27-2018', 'img': 'https://lh3.googleusercontent.com/lsXN3vXMqALFA8YqnCuSMahpLWl8hfHOVmQA-Pkd8A5RoQjeL39AsYZraovLlCIKA5Kxhj8VKxRYWWguDpqxL3gV6dHLIpkfEBNBSoun0eTJkv1UNix0pUcI_HJUBFjXW-9vdNe4Hw=w2400'},
	  				{'title': 'My New Home in Sendai', 'date': '03-28-2018', 'img': 'https://lh3.googleusercontent.com/GBhl2LubchKZ5H5FGXd1lKc1cPpVXc3OaLrfjE1E1SoaztUWcwpygzhV74BPzkPOOKhtXZIJP2UvGTTnNTLiwQJ8yrN_7CZtpHCHBFC09Ut39i5_TDBfAfk8y4TFFKvIDRYmIhHkAQ=w2400'},
	  				{'title': 'Boring Logistics and Daiso', 'date': '03-29-2018', 'img': 'https://lh3.googleusercontent.com/yFtWJO2AhGzFXclMo2wizR9ZkdBCvDxPrp2J_MwHVBbGhXjMS0esvMx7qLIEGwxNKwj8qrLwH6PLWeTmdi-2BizfPJ5zJGE51ZhRZks2ycqRmTQTW6VJ4tmAc91ry_EGVa93wbhREA=w2400'},
	  				{'title': 'Neighborhood Snooping', 'date': '03-30-2018', 'img': 'https://lh3.googleusercontent.com/f0mBhdLPHz4sQNNjGori2w3PP2j_W_IV0XaPStsva6lyOUgGqTF7wKo2g0ATlH8TXtBrkXFSAVQSSwXvHGe5i726enydO8X14Ypgiux5zdpkfupSxKLli3X8Oh5P7KVSpWUePeF_Lg=w2400'},
	  				{'title': 'Lazy Saturday Picnic', 'date':'03-30-2018', 'img': 'https://lh3.googleusercontent.com/YINm__GOZyYFG9GFEK3DZvdDe2OqmsFEo4vGiXAdaNHGuDPliVIuZAHaYxh-DDYBzGsjgaY9lOh1CtocZljUxhDHv0kLUwUIfYovafq49Vgrri3YJpS-WfnOENcLoRP21TUHblfaKA=w2400'},
	  				], 'days': 31, 'prevMonthDays': 28, 'startDate': 25, 'active': [26, 27, 28, 29, 30]},
  		'04-2018': {'posts': [
  					{'title': 'Lifehouse Sendai', 'date':'04-1-2018', 'img': 'assets/images/LifehouseSendai.png'},
	  				{'title': 'Cindy and Ethan Visit', 'date': '04-7-2018', 'img':'https://lh3.googleusercontent.com/yoPI1D7UMdDnoetjhnwC-djE6A3rhf8Y1qFcz9fx3kJPIaZwyQLdwKQaI1A1Fji32uYuv15CgRnDqGXc5PyV2b2Gqq_RUqfdCggvqMDstdMV97q7-9DyFzTl12vaQY0MmELLiDKxgA=w2400'},
	  				{'title': 'Cindy and Ethan Visit', 'date': '04-8-2018', 'img':'https://lh3.googleusercontent.com/yoPI1D7UMdDnoetjhnwC-djE6A3rhf8Y1qFcz9fx3kJPIaZwyQLdwKQaI1A1Fji32uYuv15CgRnDqGXc5PyV2b2Gqq_RUqfdCggvqMDstdMV97q7-9DyFzTl12vaQY0MmELLiDKxgA=w2400'},
	  				{'title': 'Ogawara', 'date':'04-9-2018', 'img': 'https://lh3.googleusercontent.com/h4OwSmeD2j-zHtRI-VT0a5m3HjSl1q5aHstG5PLEN7Fx_2IJTSxqbKszmDiHPvEzRFNx6fIJduNJHT6uXlFwJi-eYDL4V65PRdHHyL_sE7ArSyUwwfpVgT7SKE2KS8_tVzLDmAyj4A=w2400'},
	  				{'title': 'Tsutsujigaoka Park Hanami', 'date':'04-10-2018', 'img': 'https://lh3.googleusercontent.com/QXCMvI4Ktmsf9gBUfA4UGP2h2MGQtEadmyYWXnGckbqJ75tXZgicyxhgr03Sl9KL3zwi25x0JIemc4LurtGK0J1J-4RbotlflnijaH5_42X0TOF7gYd6fm24PEgSjUoBvObyXbewcQ=w2400'},
	  				{'title': 'Iwanuma Tree Planting', 'date':'04-21-2018', 'img': 'https://lh3.googleusercontent.com/InV6jXx39VaEsQgj9YHHq2rmI08VeJ8N9iVfBao2i3ClYPcOAPnERF6zaSmnAOg3CP2rEt55AjsljMVNZnIN3ftucJA6FoaLDJtjcSLLkF6ArogQ7uq_OWK8g2jN7b0dpYseAIwWzw=w2400'},
	  				{'title': 'Hanyu Parade', 'date':'04-22-2018', 'img': 'https://lh3.googleusercontent.com/5j6bY4R5KHBrk5cYafWyGVJCUrd1bZcncwiwgWgY3sofnzW2hg_cSgkLtZWP_ZTXR2dx861hW_c650JhIag-9qPMCRbUtp8Bq5D-6JKgdjkW2BE5pOKNQGogT137Z3u4pRkWBzj5zg=w2400'}
	  				], 'days': 30, 'prevMonthDays': 31, 'startDate': 1, 'active': [1, 7, 8, 9, 10, 21, 22]},
	  	'05-2018': { 'posts': [],
	  				'days':31, 'prevMonthDays':30, 'startDate':29
	  	},
	  	'06-2018': { 'posts': [{}], 'days':30, 'prevMonthDays':31, 'startDate':27, 'active':[]},
	  	'07-2018': {'posts':[{}], 'days': 31, 'prevMonthDays': 30, 'star tDate': 1, 'active':[]},
	  	'08-2018': {'posts':[{}], 'days':31, 'prevMonthDays':31, 'startDate':29, 'active':[]},
	  	'09-2018': {'posts':[{}], 'days':30, 'prevMonthDays':31, 'startDate': 26, 'active':[]}
  	}

	this.monthsDict = {
		3: 'March 2018',
		4: 'April 2018',
		5: 'May 2018',
		6: 'June 2018',
		7: 'July 2018',
		8: 'August 2018',
		9: 'September 2018'
	}

	this.curMonth = 4;
	this.curYear = '2018';
	this.monthYear = '04-2018';

	this.i = 0;
  this.changePrevMonth();
  }

  mouseOverDate(obj){
  	let date = '';
  	let monthYear = ''
  	if (this.curMonth < 10){
  		monthYear = monthYear + '0' + this.curMonth;
  	}
  	let day = obj.innerText;
  	if (obj.innerText < 10){
  		date = monthYear + '-0' + obj.target.innerText + '-' + this.curYear;
  	}
  	else {
  		date = monthYear + '-' + obj.target.innerText + '-' + this.curYear;
  	}

  	monthYear = monthYear + '-' + this.curYear;
  	
  	var inc; 
  	for (inc = 0; inc < this.calPosts[monthYear].posts.length; inc++){
  		if (date === this.calPosts[monthYear].posts[inc].date){
  			this.el.nativeElement.src=this.calPosts[monthYear].posts[inc].img;
  			this.title.nativeElement.innerText=this.calPosts[monthYear].posts[inc].title;
  			break;
  		}
  	}
  	//this.el.nativeElement.src=url;
  }

  changePrevMonth():any {
  	if (this.curMonth > 3){
	  	this.curMonth = (this.curMonth-1);
	  	if (this.curMonth < 1){
	  		this.curMonth = 12 + this.curMonth;
	  	}

	  	//change calendar
	  	let monthdate = '';
	  	
	  	if (this.curMonth < 10){
	  		monthdate= '0';
	  	}
	  	monthdate = monthdate + this.curMonth + '-' + this.curYear;

	  	this.fillMonth(monthdate);
	  	//this.cal.nativeElement.innerHTML= this.dict[monthdate];
	  	this.mn.nativeElement.innerHTML = this.monthsDict[this.curMonth];
	 }
  }

  checkActive(num, array, idx):number {
  		while (num >= array[idx]){
  			if (num == array[idx]){
  				return idx;
  			}
  			idx++;
  		}
  	return idx;
  }

  fillMonth(monthDate):any{ 
  	let days = this.calPosts[monthDate].days;
  	let prevMonthDays = this.calPosts[monthDate].prevMonthDays;
  	let startDate = this.calPosts[monthDate].startDate;
  	let curDay = 1;
  	let active = this.calPosts[monthDate].active;
  	let posts = this.calPosts[monthDate].posts;

  	//clearing out current calendar
  	this.cal.nativeElement.innerHTML='';

  	let perRow = 0;
  	let newM = 1;
  	let row;
  	let col;
  	let link;
  	let indSoFar = 0;

  	while (curDay <= days){
  		//create new row here
  		row = document.createElement('tr');

  		while (startDate != 1 && startDate <= prevMonthDays){
  			col = document.createElement('td');
  			col.innerText='';
  			row.appendChild(col);
  			startDate++;
  			perRow++;
  		}

  		while (perRow < 7){
  			if (curDay > days){
  				col = document.createElement('td');
  				col.innerText='';
  				row.appendChild(col);
  				newM++;
  				perRow++;
  			}
  			else {
  				col = document.createElement('td');
  				col.innerText=curDay;
  				if (typeof active !== 'undefined'){
  					indSoFar = this.checkActive(curDay, active, indSoFar);
  					if (active[indSoFar] == curDay){
  						col.className='event';
  						col.addEventListener('mouseover', this.mouseOverDate.bind(this));
              col.addEventListener('click', this.goToArticle.bind(this), false);
  						//set link
  						link = document.createElement('a');
  						link.src='';
  						col.appendChild(link);
  						
  						indSoFar++;
  					}
  				}
  				
  				row.appendChild(col);
  				curDay++;
  				perRow++;
  			}

  		}
  		this.cal.nativeElement.appendChild(row);
  		
  		perRow = 0; //resetting
  	}
  }

  inActive(active, num):boolean{
  	let inc = 0;
  	while(num <= active.length){
  		if (num == active[inc]){
  			return true;
  		}
  		inc++;
  	}
  	return false;
  }

  changeNextMonth():any {

  	if (this.curMonth < 10){
	  	this.curMonth = (this.curMonth+1);
	  	if (this.curMonth > 12){
	  		this.curMonth = this.curMonth - 12;
	  	}
	  	//change calendar
	  	let monthdate = '';
	  	
	  	if (this.curMonth < 10){
	  		monthdate= '0';
	  	}
	  	monthdate = monthdate + this.curMonth + '-' + this.curYear;

	  	this.fillMonth(monthdate);
	  	//this.cal.nativeElement.innerHTML= this.dict[monthdate];
	  	this.mn.nativeElement.innerHTML = this.monthsDict[this.curMonth];
	 }
  }

  goToArticle(event): any {
    let articleId = '' + this.curMonth + "-" + event.target.innerText;
    console.log(articleId);
    this.router.navigate(['/post', articleId]);
    //find article template
    //pass template to 
  }

	/*var datesWithEvents = document.getElementsByClassName('event');

	for (i = 0; i < datesWithEvents.length; i++){
	  datesWithEvents[i].addEventListener('mouseover', changeWindow, false);
	}*/

	/*function changeWindow(){
	  var month = curMonth;
	  if (this.className.split(" ")[0] === 'prev-month'){
	    month = curMonth - 1;
	  }

	  var dateToSearch = "2018-0" + month + "-";
	  //search for post in posts array
	  for (i = 0; i < posts.length; i++){
	    if (posts[i].date === dateToSearch + this.firstChild.innerHTML){
	      angular.element(document.querySelector('.highlight-img')).src = posts[i].img;
	      document.getElementById('overlay').innerHTML = posts[i].title;
	    }
	  }
	}

	function isScrolledIntoView(elem){
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();

	    return((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}*/
}
