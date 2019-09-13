import { MatToolbarModule, } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
    imports: [MatDividerModule, MatButtonToggleModule, MatPaginatorModule, MatTableModule, MatToolbarModule, MatButtonModule, MatCheckboxModule, MatIconModule],
    exports: [MatDividerModule, MatButtonToggleModule, MatPaginatorModule, MatTableModule, MatToolbarModule, MatButtonModule, MatCheckboxModule, MatIconModule],
})

export class MaterialModule { }