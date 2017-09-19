import { Injectable } from '@angular/core';
// import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class PlaceService{
    // private img : string;
    // private API_Key : string = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=AIzaSyBPiXkKIQnjw9AHv6d4dD1FweQ4-iX3UR8';
    // https://maps.googleapis.com/maps/api/place/autocomplete/json?input="+place+"&components=country:in&key=
    private Key : string ='AIzaSyBPiXkKIQnjw9AHv6d4dD1FweQ4-iX3UR8';
    // private place : string;
    // private placeURL : string;
    constructor (private _http:Http) { }

    getImage (img){
        return this._http.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query='+img+'&key=AIzaSyBPiXkKIQnjw9AHv6d4dD1FweQ4-iX3UR8').map(result => result.json());
    }
}