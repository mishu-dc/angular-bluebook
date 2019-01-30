import { FieldforceService } from './../../services/fieldforce.service';
import { DataGridComponent } from './../data-grid/data-grid.component';
import { BadInput } from './../../common/bad-input';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'field-force',
  templateUrl: './field-force.component.html',
  styleUrls: ['./field-force.component.css']
})
export class FieldForceComponent implements OnInit{

    @ViewChild(DataGridComponent) dataGrid: DataGridComponent;

    constructor(public service:FieldforceService){
        
    }

    ngOnInit(): void {
        this.service.getList(1,20).subscribe(
          (response)=>{
              this.dataGrid.total = response.total;
              this.dataGrid.records = response.items;
          },
          (error:BadInput)=>{

          });
    }
}
