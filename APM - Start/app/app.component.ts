import {Component} from "angular2/core";
import {ProductListComponent} from "./product/product-list.component";
import {ProductService} from "./product/product.service";
import {HTTP_PROVIDERS} from "angular2/http";
import 'rxjs/Rx'

@Component(
    {
        selector: 'pm-app',
        template:'<div><h1>{{pageTitle}}</h1><pm-product></pm-product></div>',
        directives: [ProductListComponent],
        providers: [ProductService,HTTP_PROVIDERS]
    }
)
export class AppComponent
{
    pageTitle: string = 'Acme Product Management';
}
