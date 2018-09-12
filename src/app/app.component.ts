import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatTooltip} from '@angular/material/tooltip';
import { FormGroup, FormControl, NgForm, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    response: any;
    dataSourceC1: Array<any> = [];
    dataSource: any;
    dataSourcec1: any;
    dataSourcec: any;
    app:any;
    applicationName: any;
    itemNumber:any=1;
dataItems:any;
    constructor(private http: HttpClient) { }
    ngOnInit() {
        
        this.http.get('https://demo8472939.mockable.io/jsonDataoutput2').subscribe(data =>
         this.dataItems=data
         );
       
    }
    

    statusData() {
        // this.dataSourcec1=[];
        console.log(this.dataSourcec1);
        var val=JSON.stringify(this.itemNumber)
        this.response=[];
            this.response = this.dataItems[val];  
            console.log("this.response",this.response);  
        this.applicationName = this.response.appName;
        this.dataSourcec1={};
        for (var i = 0; i < this.response.component.length; i++) {

            let status1: any = 0;
            let status2: any = 0;
            for (var j = 0; j < this.response.component[i].probes.length; j++) {
                if (this.response.component[i].probes[j].status === 1) {
                    status1++;
                }
                else {
                    status2++;
                }
            }

            this.dataSourceC1=[];
            this.dataSourceC1.push({ 'label': 'Status1', value: status1, "color": "#008000" }, { 'label': 'Status2', value: status2, "color": "000000" });
        
        }
        this.dataSourcec1 = {
            "data": this.dataSourceC1
        }
        console.log(this.dataSourceC1);
        
        console.log(this.dataSourcec1);
    }

    itemValue(){
        console.log(this.itemNumber, this.response);
        this.response
    }
}


