import { Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AddEditComponent } from './add-edit/add-edit.component';
//import { DataService } from './data.service';
import { ZoneComponent } from './zone/zone.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task';
   dialog: any; 

 

/*    constructor(private_dialog: MatDialog, private _zoneservice: DataService){}
   openAddEdit(){
this.dialog.open(AddEditComponent)
   } */

/*    ngOnInit(): void {
     this.getzonelist
   }
 
getzonelist(){
this._zoneservice.getZonelist().subscribe<any>({
  next: (res:any) => {

  },
  error: (err:any) =>{
console.log(err)
  }
})
   } */ 

}