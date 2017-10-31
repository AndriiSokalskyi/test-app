import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'warning-alert',
  templateUrl: './warning-alert.component.html',
  // styleUrls: ['./warning-alert.component.css']  
  styles: [`
    .test:{
      background: 'lightRed';
    }

    .container{
      background: black;
      color: red;
    }

    .arrayelement{
      background: white;
      color: blue;
    }
  `]
})
export class WarningAlertComponent implements OnInit {
  showParagraph = false;
  clicksArray = [];
  constructor() { }

  ngOnInit() {
  }

  onBtnClick() {
    this.showParagraph = !this.showParagraph;
    this.clicksArray.push('Button was clicked at ' + new Date());
  }

  getColor(index){
    return index < 3 ? 'red' : 'green';
  }

  getClass(index){
    return index < 2 ? '.arrayelement' : '.container';
  }
}
