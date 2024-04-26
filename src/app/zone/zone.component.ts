import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditComponent } from '../add-edit/add-edit.component';
//import { DataService } from '../data.service';
import { CoreService } from '../service/core.service';
import { EmployeeService } from '../service/employee.service';
import { OnInit, ViewContainerRef, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent {
  private readonly newProperty = 'id';



  displayedColumns: string[] | AddEditComponent = [
    this.newProperty,
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _empService: EmployeeService,
    private _coreService: CoreService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }



  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({
      next: (res) => {
        console.log(res, "sddsdsds");
        const employeesArray = Object.keys(res).map(key => ({ id: key, ...res[key] }));

        this.dataSource = new MatTableDataSource(employeesArray);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.cdr.detectChanges();
      },
      error: console.log,
    });
  }

  openAddEditEmpForm() {
    let dialogRef = this._dialog.open(AddEditComponent);
console.log("jjjjjikik");
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        console.log('Dialog closed with value:', val);

        if (val) {
          this.getEmployeeList();
        }
      },

    });



  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }




  // Addemployye(data: any) {
  //   this._empService.addEmployee(data).subscribe({
  //     next: (res) => {
  //       this.getEmployeeList();
  //     },
  //     error: console.log,
  //   });
  // }


  deleteEmployee(id: number) {
    this._empService.deleteEmployee(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Employee deleted!', 'done');
        this.getEmployeeList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(AddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }
  openAddEdit() {
    this._dialog.open(AddEditComponent)

  }

}




