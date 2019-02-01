import { BadInput } from './../../common/bad-input';
import { DataGridPagination } from './../data-grid/data-grid-pagination';
import { DistributorService } from './../../services/distributor.service';
import { DataGridComponent } from './../data-grid/data-grid.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent {
    public notification:string="";
    public code:string="";
    public name:string="";

    @ViewChild(DataGridComponent) dataGrid: DataGridComponent;

    constructor(public distributorService:DistributorService){        
    }

    ngAfterViewInit(): void {
        this.getFieldforceData(this.dataGrid.currentPage,this.dataGrid.selectedPageSize);
    }

    getFieldforceData(currentPage:number, pageSize:number, code?:string, name?:string, distributorId?:number){
        this.distributorService.getList(currentPage, pageSize, code, name).subscribe(
            (response)=>{
                this.dataGrid.totalRecords = response.total;
                this.dataGrid.records = response.items;
                this.dataGrid.reInitialize();
            },
            (error:BadInput)=>{
                this.notification = error.originalError;
            });
    }

    pageChanged(eventArgs:DataGridPagination){
        this.getFieldforceData(eventArgs.currentPage,eventArgs.pageSize, this.code, this.name);
    }

    search(){
        this.getFieldforceData(this.dataGrid.currentPage,this.dataGrid.selectedPageSize, this.code, this.name);
    }

    clearAll(){
        this.code="";
        this.name="";
    }
}
