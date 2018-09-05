import { Component,OnInit } from '@angular/core';


import { FormGroup, FormControl,NgForm ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  table1:boolean=true;
  table2:boolean=true;
  table3:boolean=true;
  table4:boolean=true;
  table5:boolean=true;
  id:any;
  ngOnInit(){

  }
  deleteTable(){
    console.log(this.id);
    switch(this.id) {
      case '1':
          this.table1=false;
          break;
      case '2':
          this.table2=false;
          break;
      case '3':
          this.table3=false;
          break;
      case '4':
          this.table4=false;
          break;
      case '5':
          this.table5=false;
          break;
     
  } 
  }
}


