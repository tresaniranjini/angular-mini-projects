import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { UserQuery } from '../user.query';
import { UserService } from '../user.service';
import { ColDef, GridOptions } from 'ag-grid-community';
import { IDropdownSettings, NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
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
    NgMultiSelectDropDownModule,
    AgGridAngular
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  form!: FormGroup;
  dropdownList: { item_id: number; item_text: string }[] = [];
  selectedItems: { item_id: number; item_text: string }[] = [];
  dropdownSettings: IDropdownSettings = {};
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
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.initializeGrid();
    this.loadData();
  }

  private initializeForm() {
    this.dropdownList = [
      { item_id: 1, item_text: 'tennis' },
      { item_id: 2, item_text: 'throwball' },
      { item_id: 3, item_text: 'chess' },
      { item_id: 4, item_text: 'carrom' },
      { item_id: 5, item_text: 'football' },
    ];
    this.selectedItems = [{ item_id: 3, item_text: 'chess' }, { item_id: 4, item_text: 'carrom' }];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };

    this.form = this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      gender: ['male', [Validators.required]],
      subscription: [false],
      sports: [[], [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      console.log('Form submitted with data:', formData);
      this.formDataSubject.next(formData);
      this.form.reset();
      this.selectedItems = [];
    }
  }

  populateForm() {
    const data = this.formDataSubject.getValue();
    if (data) {
      this.form.patchValue(data);
      this.selectedItems = this.dropdownList.filter((item) =>
        data.sports.includes(item.item_id)
      );
    } else {
      console.log('No data found in BehaviorSubject to populate the form');
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
