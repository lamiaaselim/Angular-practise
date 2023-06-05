import { Component, OnInit } from '@angular/core';
import { IProduct } from './../SharedClassesAndTypes/shared';
import { ICategory } from './../SharedClassesAndTypes/shared';
import { DiscountOffers } from './../SharedClassesAndTypes/shared';
import { ProductServiceService } from './../services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  errorMsg:any;
  isPurchased = false;
  Discount:DiscountOffers
  StoreName:string
  StoreLogo:String
  // ProductList:IProduct [] //old
  products: any = []; //new by service
  CategoryList:ICategory[]
  ClientName:String
  // IsPurshased:Boolean
  nodiscount:Boolean=true;
    constructor(private productService: ProductServiceService, private router: Router, private route: ActivatedRoute)
        {
        this.Discount=DiscountOffers.sale2;
        this.StoreName="Gomia"
        this.StoreLogo="String"

        // olde
        // this.ProductList =[
        // {Id:1,Name:"Product1",Quantity:"Three",Price:900,Img:"../../assets/image/22.jpg"},
        // {Id:2,Name:"Product2",Quantity:"two",Price:900,Img:"../../assets/image/22.jpg"}]
        // new
        //private ProductServiceService: ProductServiceService
        this.CategoryList=[{
          id:1,
          name:"B1"
        },
        {
          id:2,
          name:"B2"
        },
        {
          id:3,
          name:"B3"
        }]
        this.ClientName=""
        // this.IsPurshased=true
        }

        buy() {
          this.isPurchased = !this.isPurchased;
        }

        renderValues(){
          console.log("lamiaa");
        }

        getProductById(productId: number): IProduct | null {
          return this.productService.getProductById(this.products, productId);
        }

        navigateToDiscountedProducts() {
          this.router.navigate(['discounted'], { relativeTo: this.route });
        }

        navigateToNonDiscountedProducts() {
          this.router.navigate(['non-discounted'], { relativeTo: this.route });
        }

        ngOnInit(): void {
          this.productService.getAllProducts().subscribe({
            next: Productdata => this.products = Productdata,
            error: error => this.errorMsg = error
          //this.products =this.productService.getProductById(1);
          })

        }
}
