export class FieldForce {
    constructor(public id:number,
                public code:string,
                public name:string,
                public distributors?:any[],
                public marketHierarchy?:any
                ){

    }

    get distributorNames(){
        let names:string='';
        if(this.distributors){
            for(let i=0;i<this.distributors.length;i++){
                names+=this.distributors[i].code + "-" + this.distributors[i].name + ",";
            }
        }
        if(names.length>0){
            names = names.slice(0, names.length-1);
        }
        return names;
    }

    get marketHierarchyName(){
        if(this.marketHierarchy){
            return this.marketHierarchy.code + "-" + this.marketHierarchy.name;
        }
        return "-";
    }
}