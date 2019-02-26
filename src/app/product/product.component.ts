import { Product } from './../../entities/product';
import { DataGridPagination } from './../data-grid/data-grid-pagination';
import { BadInput } from './../../common/bad-input';
import { Brand } from './../../entities/brand';
import { BrandService } from './../../services/brand.service';
import { DataGridComponent } from './../data-grid/data-grid.component';
import { Component, ViewChild } from '@angular/core';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
    private MAX_LIMIT:number = 5000; 
    public brands:Brand[]=[];
    public notification:string="";
    public code:string="";
    public name:string="";
    public brandId:number=-1;
    public showLoading:boolean=false;

    @ViewChild(DataGridComponent) dataGrid: DataGridComponent;

    constructor(public brandService:BrandService, public productService:ProductService){
        
    }

    convertResponseToProducts(records:any[]){
        let lists:Brand[] = [];
        records.forEach(product => {
           console.log(Math.round(product.price));
            let obj:Product = new Product(product.id, product.code, product.name, product.brandName, Math.round(product.price));
            lists.push(obj);
        });
        return lists;
    }

    getBrands(){
        this.brands = [];
        this.brandService.getList(1, this.MAX_LIMIT).subscribe(
            (response)=>{
                response.items.forEach(brand => {
                    this.brands.push(new Brand(brand.id, brand.code, brand.name));
                });
            },
            (error:BadInput)=>{
                this.notification = error.originalError;
            }
        );
    }

    getFieldforceData(currentPage:number, pageSize:number, code?:string, name?:string, brandId?:number){
        this.showLoading = true;
        this.productService.getListByBrand(currentPage, pageSize, code, name, brandId).subscribe(
            (response)=>{
                this.dataGrid.totalRecords = response.total;
                this.dataGrid.records = this.convertResponseToProducts(response.items);
                this.dataGrid.reInitialize();
                this.showLoading = false;
            },
            (error:BadInput)=>{
                this.notification = error.originalError;
                this.showLoading = false;
            });
    }

    ngOnInit(): void {
        this.getBrands();
    }

    ngAfterViewInit(): void {
        this.getFieldforceData(this.dataGrid.currentPage,this.dataGrid.selectedPageSize);
    }

    pageChanged(eventArgs:DataGridPagination){
        this.getFieldforceData(eventArgs.currentPage,eventArgs.pageSize, this.code, this.name, this.brandId);
    }

    search(){
        this.getFieldforceData(this.dataGrid.currentPage,this.dataGrid.selectedPageSize, this.code, this.name, this.brandId);
    }

    clearAll(){
        this.code="";
        this.name="";
        this.brandId=-1;
    }
}
