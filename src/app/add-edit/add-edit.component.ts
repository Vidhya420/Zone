import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
//import { DataService } from '../data.service';
import { CoreService } from '../service/core.service';
import { EmployeeService } from '../service/employee.service';
import { ZoneComponent } from '../zone/zone.component';
import { NgZone } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent {

  //zoneform: FormGroup;

  /* document.addEventListener('DOMContentLoaded', () =>{
    const CancelButton=document.getElementById('CancelButton');
    if (CancelButton){
      CancelButton?.addEventListener('click', () =>{
        window.history.back();
      });
    });
  } */
  /* 
  constructor(private _fb: FormBuilder,private _zoneservice: DataService,private _DialogRef: DialogRef<AddEditComponent>,private router: Router){
  this.zoneform= this._fb.group({
  plantcode:'',
  buildingcode:'',
  zoneName:'',
  Des:'',
  type:'',
  category:'',
  sta:''
  
  
  })
  
  
  } */
  /* onFormSubmit(){
    if (this.zoneform.valid){
      this._zoneservice.addzone(this.zoneform.value).subscribe({
        next:(val: any) => {
             alert('Zone Added Successfully')
             this._DialogRef.close();
        },
        error: (err:any) => {
          console.error(err)
        }
      })
    }
  }} */

  /* onFormSubmit(){
    console.log("submitted")
  }
  cancel(){
    this.router.navigate(['/zone']);
  
  
  } */


  empForm: FormGroup;

  education: string[] = [
    'Accessories',
    'Customer',
    'Customer Return',
    'Loading',
    'Logistics',
    'Prestaging',
    'Production',
    'Shipment',
    'Specific',
  ];

  plantcode: string[] = [
    'J340',
 
  ];

  
  Buildingcode: string[] = [
    '001-Building 1',
    '001-Building 2',
  ];

  Zonetype: string[] = [
    'Indoor',
    'Outdoor',
  ];

  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private ngZone: NgZone,
    private _dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: '',

    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }



  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._empService
          .updateEmployee(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Employee detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Zone Added Successfully');
            console.log('Zone submitted successfully');


            this._dialogRef.close(true);
            
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }

      this._dialogRef.close(true);

    }
  }




}



