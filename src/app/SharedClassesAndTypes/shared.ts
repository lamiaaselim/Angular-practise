export interface IProduct{
  Id:Number;
  Name:String;
  Quantity:String;
  Price:Number;
  Img:String;
  Discount:String;
}

export interface ICategory{
  id:Number;
  name:String;
}

export enum DiscountOffers {
  sale1=0,
  sale2=0.1,
  sale3=0.3
}

// export * from "./../products/products.component";
