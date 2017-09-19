import { StaticComponent } from './../static/static.component';
import { PlaceComponent } from './../place/place.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  inputs:['parentValue']
})
export class SearchComponent implements OnInit {

 parentValue : string;


  constructor() { }

  ngOnInit() {
  }

}
