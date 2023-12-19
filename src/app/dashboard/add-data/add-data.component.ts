import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendService } from 'src/app/shared/backend.service';
import { StoreService } from 'src/app/shared/store.service';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})

export class AddDataComponent implements OnInit{

  constructor(private formbuilder: FormBuilder, public storeService: StoreService, public backendService: BackendService) {
  }
  public addChildForm: any;
  @Input() currentPage!: number;

  ngOnInit(): void {
    this.addChildForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      kindergardenId: ['', Validators.required],
      birthDate: [null, Validators.required]
    })
  }

  @NgModule({
    declarations: [
    ],
    imports: [
       MatInputModule,
       MatButtonModule,
       MatFormFieldModule
    ],
    exports: [
      MatInputModule,
       MatButtonModule,
       MatFormFieldModule
    ],
    providers: [],
    bootstrap: []
  })

  onSubmit() {
    if(this.addChildForm.valid) {
      console.log(this.currentPage);
      this.backendService.addChildData(this.addChildForm.value, this.currentPage);
    }
  }
}


