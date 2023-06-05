import { Injectable } from '@angular/core';
import { IProduct } from '../SharedClassesAndTypes/shared';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products=[];
  _url = "../../assets/Data/products";
  constructor(private http: HttpClient) { }

  getAllProducts() : Observable<IProduct[]>
  {
    // return this.products
    return this.http.get<IProduct[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=> err.message || "sever Error")
    }));
  }

  getProductById(products: IProduct[], productID: number): IProduct | null {
    if (isNaN(productID)) {
      return null;
    }
    return products.find((product) => product.Id=== productID) || null;
  }
}
