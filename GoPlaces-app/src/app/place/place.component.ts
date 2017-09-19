import { PlaceService } from './place.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  images : any[];
  url : string= "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=";
  key : string="&key=AIzaSyBPiXkKIQnjw9AHv6d4dD1FweQ4-iX3UR8";
  constructor(private placeService: PlaceService) { }

  rawData(data){
  this.images=data.results;
    console.log(data.results);
}



  searchPlace(img : string){
    return this.placeService.getImage(img).subscribe(
      data=>this.rawData(data),
      error=>console.log(error),
      ()=>console.log('Request completed boss')
    )
  }

  ngOnInit() {
  }

}
