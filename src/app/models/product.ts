export class Product {
    id!: number;
    category!: {name:string,id:number};
    name!: string;
    model!: string;
    price!: number;
    color!: string;
    isOutOfStock !:boolean;
}
