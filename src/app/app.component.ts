import { Component,OnInit } from '@angular/core';
import {HttpClient}  from '@angular/common/http';

import { FormGroup, FormControl,NgForm ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 response:any;
 dataSourceC1:Array<any>=[];
 dataSourceC2:Array<any>=[];
 dataSourceC3:Array<any>=[];
 dataSourceC4:Array<any>=[];
 dataSource:any;
 dataSourcec1:any;
 dataSourcec2:any;
 dataSourcec3:any;
 dataSourcec4:any;

 tbl1Name:any;
 tbl2Name:any;
 tbl3Name:any;
 tbl4Name:any;
applicationName:any;

constructor(private http:HttpClient){}
  ngOnInit(){
    this.http.get('https://demo8472939.mockable.io/jsonDataoutput').subscribe(data=>this.statusData(data));
    // console.log(this.statusData(data));
  
  this.dataSourcec1 = {
    "data": this.dataSourceC1
} 
this.dataSourcec2 = {
    "data": this.dataSourceC2
} 

this.dataSourcec3 = {
    "data": this.dataSourceC3
} 

this.dataSourcec4 = {
    "data": this.dataSourceC4
} 
  }

  statusData(data){
      this.response=data;
      console.log(this.response);
      this.applicationName=this.response.appName;
     this.tbl1Name=this.response.component[0].id;
     this.tbl2Name=this.response.component[1].id;
     this.tbl3Name=this.response.component[2].id;
     this.tbl4Name=this.response.component[3].id

for(var i=0;i<this.response.component.length;i++){
    if(i==0)
    {
        let status1:any=0;
        let status2:any=0;
        for(var j=0;j<this.response.component[i].probes.length;j++){
            if(this.response.component[i].probes[j].status===1){
               status1++;
            }
            else{
                status2++;
            }
        }
        this.dataSourceC1.push({'label':'Status1',value:status1,"color":"#008000"},{'label':'Status2',value:status2,"color":"000000"});
    }

    if(i==1){

        let status1:any=0;
        let status2:any=0;
        for(var j=0;j<this.response.component[i].probes.length;j++){
            if(this.response.component[i].probes[j].status===1){
               status1++;
            }
            else{
                status2++;
            }
        }
        this.dataSourceC2.push({'label':'Status1',value:status1,"color":"#008000"},{'label':'Status2',value:status2,"color":'000000'});
    
    }
    if(i==2){

        let status1:any=0;
        let status2:any=0;
        for(var j=0;j<this.response.component[i].probes.length;j++){
            if(this.response.component[i].probes[j].status===1){
               status1++;
            }
            else{
                status2++;
            }
        }
        this.dataSourceC3.push({'label':'Status1',value:status1,"color":"#008000"},{'label':'Status2',value:status2,"color":"#000000"});
        
    }

    if(i==3){

        let status1:any=0;
        let status2:any=0;
        for(var j=0;j<this.response.component[i].probes.length;j++){
            if(this.response.component[i].probes[j].status===1){
               status1++;
            }
            else{
                status2++;
            }
        }
        this.dataSourceC4.push({'label':'Status1',value:status1,"color":"#008000"},{'label':'Status2',value:status2,"color":"#000000"});
    }
}
  }}


