import { DistributorService } from './../../services/distributor.service';
import { Disctibutor } from './../../entities/distributor';
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
export class FieldForceComponent implements OnInit{
    private MAX_LIMIT:number = 5000; 
    public distributors:Disctibutor[]=[];
    public notification:string="";
    public code:string="";
    public name:string="";
    public distributorId:number=-1;

    public showLoading:boolean=false;

    @ViewChild(DataGridComponent) dataGrid: DataGridComponent;

    constructor(public fieldForceService:FieldforceService, public distributorService:DistributorService){
        
    }

    convertToFieldforces(records:any[]){
        let lists:FieldForce[] = [];
        records.forEach(ff => {
            let obj:FieldForce = new FieldForce(ff.id, ff.code, ff.name, ff.distributors, ff.marketHierarchy);
            lists.push(obj);
        });
        return lists;
    }

    getDistributors(){
        this.distributors = [];
        this.distributorService.getList(1, this.MAX_LIMIT).subscribe(
            (response)=>{
                response.items.forEach(distributor => {
                    this.distributors.push(new Disctibutor(distributor.id, distributor.code, distributor.name, distributor.address));
                });
            },
            (error:BadInput)=>{
                this.notification = error.originalError;
            }
        );
    }

    getFieldforceData(currentPage:number, pageSize:number, code?:string, name?:string, distributorId?:number){
        this.showLoading = true;
        this.fieldForceService.getListByDistributor(currentPage, pageSize, code, name, distributorId).subscribe(
            (response)=>{
                this.dataGrid.totalRecords = response.total;
                this.dataGrid.records = this.convertToFieldforces(response.items);
                this.dataGrid.reInitialize();
                this.showLoading = false;
            },
            (error:BadInput)=>{
                this.notification = error.originalError;
                this.showLoading = false;
            });
    }

    ngOnInit(): void {
        this.getDistributors();
    }

    ngAfterViewInit(): void {
        this.getFieldforceData(this.dataGrid.currentPage,this.dataGrid.selectedPageSize);
    }

    pageChanged(eventArgs:DataGridPagination){
        this.getFieldforceData(eventArgs.currentPage,eventArgs.pageSize, this.code, this.name, this.distributorId);
    }

    search(){
        this.getFieldforceData(this.dataGrid.currentPage,this.dataGrid.selectedPageSize, this.code, this.name, this.distributorId);
    }

    clearAll(){
        this.code="";
        this.name="";
        this.distributorId=-1;
    }
}
