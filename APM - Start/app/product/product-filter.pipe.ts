import {PipeTransform} from "angular2/src/core/change_detection/pipe_transform";
import {Pipe} from "angular2/src/core/metadata";
import {IProduct} from "./product";

@Pipe(
    {
        name: 'productFilter'
    })

export class ProductFilterPipe implements PipeTransform
{
    transform(products: IProduct[], filterValue: string): IProduct[]
    {
        console.log(`Filter=${filterValue}`);
        let filter: string = filterValue ? filterValue.toLocaleLowerCase() : null

        let filteredProducts : IProduct[] = filter ? products.filter( (product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filter) != -1) : products;

        console.log(`count=${filteredProducts.length}`);
        return (filteredProducts ? filteredProducts : products);
    }
}

