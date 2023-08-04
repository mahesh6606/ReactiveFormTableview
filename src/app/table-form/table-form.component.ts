import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TableRow } from '../interface/table-form-interface';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css']
})
export class TableFormComponent {
  tableForm: FormGroup;
  tableData: TableRow[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.tableForm = this.formBuilder.group({
      name: '',
      age: '',
      email: ''
    });
  }

  onSubmit() {
    if (this.tableForm.valid) {
      const formData = this.tableForm.value as TableRow;
      this.tableData.push(formData);
      this.tableForm.reset();
    }
  }
}