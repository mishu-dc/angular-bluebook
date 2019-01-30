import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {
    @Input('height')height:number;
    @Input('headers')headers: string[]; 
    @Input('columns')columns: string[]; 
    @Input('column-widths')columnWidths: string[]; 
    @Input('column-alignment')columnAlignment: string[];
    @Input('total')total:number; 
    @Input('pages')pages:number[]; 
    @Input('current-page')currentPage:number; 
    @Input('records') records:any[];

    footerColSpan:number;

    constructor() { }

    ngOnInit() {
        this.height = this.height? this.height:500;           
        this.total = this.total? this.total : 0;
        this.columns = this.columns? this.columns:[];
        this.pages = this.pages? this.pages:[10,20,30,40,50];
        this.footerColSpan = this.headers.length;
    }

}
