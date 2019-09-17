import { MatToolbarModule, } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material';

@NgModule({
    imports: [MatInputModule, MatFormFieldModule, MatDividerModule, MatButtonToggleModule, MatPaginatorModule, MatTableModule, MatToolbarModule, MatButtonModule, MatCheckboxModule, MatIconModule],
    exports: [MatInputModule, MatFormFieldModule, MatDividerModule, MatButtonToggleModule, MatPaginatorModule, MatTableModule, MatToolbarModule, MatButtonModule, MatCheckboxModule, MatIconModule]
})

export class MaterialModule { }