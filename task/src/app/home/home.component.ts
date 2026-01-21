import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { UserQuery } from '../user.query';
import { UserService } from '../user.service';
import { ColDef, GridOptions } from 'ag-grid-community';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { AgGridAngular } from 'ag-grid-angular';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

interface DropdownItem {
  id: number;
  itemName: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    AgGridAngular,
    AngularMultiSelectModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  dropdownSettings: any;

  selectedItems: DropdownItem[] = [];
  dropdownList: DropdownItem[] = [];
  selectedItemsChange = new EventEmitter<DropdownItem[]>();

  private formDataSubject = new BehaviorSubject<any>(null);
  formData$ = this.formDataSubject.asObservable();

  gridOptions: GridOptions = {};
  columnDefs: ColDef[] = [];
  rowData: any[] = [];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private userQuery: UserQuery,
    private dialog: MatDialog
  ) 
  {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      gender: ['', Validators.required],
      subscription: [false],
      selectedItems: [[]],
    });
  }

  ngOnInit() {
    this.initializeForm();
    this.initializeGrid();
    this.loadData();
  }

  private initializeForm() {
    this.dropdownList = [
      { id: 1, itemName: 'Football' },
      { id: 2, itemName: 'Basketball' },
      { id: 3, itemName: 'Cricket' },
      { id: 4, itemName: 'Tennis' },
      { id: 5, itemName: 'Badminton' },
      { id: 6, itemName: 'Swimming' },
      { id: 7, itemName: 'Rugby' },
      { id: 8, itemName: 'Hockey' },
      { id: 9, itemName: 'Table Tennis' },
      { id: 10, itemName: 'Golf' },
    ];

    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select Sports',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'myclass custom-class',
    };
  }

  onItemSelect(item: DropdownItem) {
    console.log(item);
    this.emitSelectedItems();
  }

  onItemDeselect(item: DropdownItem) {
    console.log(item);
    this.emitSelectedItems();
  }

  onSelectAll(items: DropdownItem[]) {
    console.log(items);
    this.emitSelectedItems();
  }

  onDeSelectAll(items: DropdownItem[]) {
    console.log(items);
    this.emitSelectedItems();
  }

  private emitSelectedItems() {
    this.selectedItemsChange.emit(this.selectedItems);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);

      this.formDataSubject.next(this.form.value);

      this.form.reset();
    }
  }

  populateForm() {
    const data = this.formDataSubject.value;
    if (data) {
      this.form.patchValue({
        name: data.name,
        age: data.age,
        gender: data.gender,
        subscription: data.subscription,
        selectedItems: data.selectedItems,
      });
    }
  }

  private initializeGrid() {
    this.columnDefs = [
      { headerName: 'Name', field: 'name', sortable: true, filter: true },
      { headerName: 'Email', field: 'email', sortable: true, filter: true },
      { headerName: 'Phone', field: 'phone', sortable: true, filter: true },
      {
        headerName: 'Actions',
        cellRenderer: (params: any) => {
          return `
           <button class="edit-btn" title="Edit">&#9998;</button>
           <button class="delete-btn" title="Delete">&#10006;</button>
          `;
        },
        onCellClicked: (event) => this.onCellAction(event),
      },
    ];
  }

  loadData() {
    this.userQuery.selectAll().subscribe((users) => {
      console.log('Loaded users:', users);

      if (users.length === 0) {
        this.userService.loadUsers().subscribe((fetchedUsers) => {
          fetchedUsers.forEach(user => this.userService.addUser(user));
        });
      } else {
        this.rowData = users;
      }
    });
  }

  onCellAction(event: any) {
    const action = event.event.target.className;
    const data = event.data;

    if (action.includes('edit-btn')) {
      this.openEditDialog(data);
    } else if (action.includes('delete-btn')) {
      this.userService.deleteUser(data.id);
      this.loadData();
    }
  }

  openEditDialog(user: any) {
    const dialogRef = this.dialog.open(EditDialogComponent, { data: user });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.updateUser({ ...user, ...result });
      }
    });
  }
}
