import { FieldForce } from './../../entities/field-force';
import { DataGridPagination } from './../data-grid/data-grid-pagination';
import { FieldforceService } from './../../services/fieldforce.service';
import { DataGridComponent } from './../data-grid/data-grid.component';
import { BadInput } from './../../common/bad-input';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'field-force',
  templateUrl: './field-force.component.html',
  styleUrls: ['./field-force.component.css']
})
export class FieldForceComponent{

    @ViewChild(DataGridComponent) dataGrid: DataGridComponent;

    constructor(public service:FieldforceService){
        
    }

    populaterecordsForGrid(records:any[]){
        let lists:FieldForce[] = [];
        records.forEach(ff => {
            let obj:FieldForce = new FieldForce(ff.id, ff.code, ff.name, ff.distributors, ff.marketHierarchy);
            lists.push(obj);
        });
        return lists;
    }

    loadFieldforceData(currentPage:number, pageSize:number, code?:string, name?:string){
        this.service.getList(currentPage, pageSize, code, name).subscribe(
            (response)=>{
                this.dataGrid.totalRecords = response.total;
                this.dataGrid.records = this.populaterecordsForGrid(response.items);
                this.dataGrid.reInitialize();
            },
            (error:BadInput)=>{
  
            });
    }

    ngAfterViewInit(): void {
        this.loadFieldforceData(this.dataGrid.currentPage,this.dataGrid.selectedPageSize);
    }

    pageChanged(eventArgs:DataGridPagination){
        this.loadFieldforceData(eventArgs.currentPage,eventArgs.pageSize);
    }
}
