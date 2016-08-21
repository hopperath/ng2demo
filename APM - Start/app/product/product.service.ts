import {Injectable} from "angular2/src/core/di/decorators";
import {IProduct} from "./product";
import {Http} from "angular2/src/http/http";
import {Observable} from "rxjs/Rx";
import {Response} from "angular2/src/http/static_response";

@Injectable()
export class ProductService
{
    private _productUrl = 'api/products/products.json';
    private _http: Http;
    constructor(_http : Http)
    {
        this._http=_http;
    }

    getProducts(): Observable<IProduct[]>
    {
        console.log("getProducts()");
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log("All:"+JSON.stringify(data)))
            .catch(this.handleError)

    }

    private handleError(error: Response)
    {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}