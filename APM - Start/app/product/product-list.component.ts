import {Component} from "angular2/src/core/metadata";
import {IProduct} from "./product";
import {OnInit, OnChanges} from "angular2/src/core/metadata/lifecycle_hooks";
import {ProductFilterPipe} from "./product-filter.pipe";
import {StarComponent} from "../shared/star.component";
import {ProductService} from "./product.service";

@Component(
    {
        selector: 'pm-product',
        templateUrl: 'app/product/product-list.component.html',
        styleUrls: ['app/product/product-list.component.css'],
        pipes: [ProductFilterPipe],
        directives: [StarComponent]
    }
)

export class ProductListComponent implements OnInit, OnChanges
{


    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    products: IProduct[];
    errorMessage : string;
    private _productService;

    constructor(productService : ProductService)
    {
       this._productService = productService;
    }


    ngOnChanges(changes: {}): any
    {
        return undefined;
    }

    ngOnInit(): void
    {
        console.log("In OnInit");
        this.products = this._productService.getProducts()
            .subscribe(products => this.products = products, error => this.errorMessage = <any>error);
    }

    toggleImage() : void
    {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string) : void
    {
        this.pageTitle = 'Product List:' + message;
    }

}
