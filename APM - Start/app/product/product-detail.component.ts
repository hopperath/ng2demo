import {Component} from "angular2/src/core/metadata";
import {RouteParams} from "angular2/src/router/instruction";
import {Router} from "angular2/src/router/router";


@Component(
    {
        templateUrl : 'app/product/product-detail.component.html'
    }
)
export class ProductDetailComponent
{
    pageTitle : string = 'Product Detail';

    constructor(private _routeParams: RouteParams, private _router: Router)
    {
        let id = +this._routeParams.get('id');
        this.pageTitle += `:${id}`;
    }

    onBack(): void
    {
        this._router.navigate(['Product']);
    }
}