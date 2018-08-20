import { Component, OnInit } from '@angular/core';
import {HttpClient}  from '@angular/common/http';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

   constructor(private http:HttpClient) { }
	response:any;
	statesList:Array<String> = [];
	countries:Array<any> = [];
	citiesList:Array<String> = [];
	states:Array<any> = [];
	cities:Array<String> = [];
	countryData:Array<any> = [];
	allRecords:Array<any> = [];
  
  ngOnInit() {
	   this.http.get('./assets/countryList.json').subscribe(data=>this.country(data));
  }
  
  
  country(data){
	 this.allRecords=data;
	 for(var i=0;i<data.Countries.length;i++){
		  this.countries.push({key:data.Countries[i].id,value:data.Countries[i].CountryName});	  
	  }
  }
   
  onItemChange(event){
		var id=event.target.value;
	  if (event.target.value.substr(0,1)==='C'){
		console.log(this.allRecords);
	   for(var i=0;i<this.allRecords.Countries.length;i++){
		  if(this.allRecords.Countries[i].id==id)
		  {
			  this.states=this.allRecords.Countries[i].States;
		  }
	  } 
	  for(var i=0;i<this.states.length;i++){
	this.statesList.push({key:this.states[i].id,value:this.states[i].StateName});
	}	 
	  } 
	  
	    if (event.target.value.substr(0,1)==='S'){
			console.log(id);
			 for(var i=0;i<this.states.length;i++){
				if(this.states[i].id==id);{
					this.cities=this.states[i].Cities;
				}
	}
			this.statesList=[];
			this.countries=[];
		}
	 
  } 
  


