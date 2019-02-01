import { DataGridPagination } from './../data-grid/data-grid-pagination';
import { BadInput } from './../../common/bad-input';
import { BrandService } from './../../services/brand.service';
import { DataGridComponent } from './../data-grid/data-grid.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
  public notification:string="";
  public code:string="";
  public name:string="";

  @ViewChild(DataGridComponent) dataGrid: DataGridComponent;

  constructor(public brandService:BrandService){        
  }

  ngAfterViewInit(): void {
      this.getFieldforceData(this.dataGrid.currentPage,this.dataGrid.selectedPageSize);
  }

  getFieldforceData(currentPage:number, pageSize:number, code?:string, name?:string, distributorId?:number){
      this.brandService.getList(currentPage, pageSize, code, name).subscribe(
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
