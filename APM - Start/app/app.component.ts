import {Component} from "angular2/core";
import {WelcomeComponent} from "./home/welcome.component";
import {ProductListComponent} from "./product/product-list.component";
import {ProductDetailComponent} from "./product/product-detail.component";
import {ProductService} from "./product/product.service";
import {HTTP_PROVIDERS} from "angular2/http";
import 'rxjs/Rx'
import {ROUTER_PROVIDERS} from "angular2/src/router/router_providers";
import {RouteConfig} from "angular2/src/router/route_config/route_config_decorator";
import {ROUTER_DIRECTIVES} from "angular2/router";

@RouteConfig([
    {path: '/welcome', name:'Welcome', component: WelcomeComponent, useAsDefault: true},
    {path: '/product', name:'Product', component: ProductListComponent},
    {path: '/product/:id', name:'ProductDetail', component: ProductDetailComponent}
//    { path: '/**', redirectTo: ['Welcome'] }

])

@Component(
    {
        selector: 'pm-app',
        template:`
            <div>
              <nav class="navbar navbar-default">
                 <div class="contianer-fluid">
                    <a class="navbar-brand">{{pageTitle}}</a>
                    <ul class="nav navbar-nav">
                       <li><a [routerLink]="['Welcome']">Home</a></li>
                       <li><a [routerLink]="['Product']">Product List</a></li>
                    </ul>
                 </div> 
              </nav>
              <div class="'container">
                  <router-outlet></router-outlet>
              </div>
            </div>`,
        directives: [ROUTER_DIRECTIVES],
        providers: [ProductService,HTTP_PROVIDERS,ROUTER_PROVIDERS]
    }
)
export class AppComponent
{
    pageTitle: string = 'Acme Product Management';
}
