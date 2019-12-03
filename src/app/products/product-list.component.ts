import { Component } from '@angular/core';
import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';
import { IProduct } from './product';

@Component ({
    selector:'pm-products' ,
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
    //styles:['thead{color:#246299; font-size:18px; text-align:center;}']
    
})

export class ProductListComponent {
    imageWidth: number = 80;
    imageMargin: number = 10;
    showImage:Boolean = false;
    listFilter:string = 'cart';

    products:IProduct[] =[
        {
            "productID":1,
            "productName":"Blue TShirt",
            "productCode":"TS-001",
            "releaseDate":"Jan 26, 2019",
            "description": "Blue Tshirt, heavy material, 7A Quality",
            "price":590,
            "starRating":3.2,
            "imageUrl":"../assets/892458.svg"
            },
            {
            "productID":2,
            "productName":"Black Trousers",
            "productCode":"TR-001",
            "releaseDate":"Feb 14, 2019",
            "description": "Solid Black Trousers",
            "price":780,
            "starRating":2.7,
            "imageUrl":"../assets/44313.svg"
            },
            {
                "productID":3,
                "productName":"Kids Wear (2-3 Years)",
                "productCode":"KW-001",
                "releaseDate":"Sep 23, 2017",
                "description": "Kids wear Boys (2-3 years)",
                "price":420,
                "starRating":4.7,
                "imageUrl":"../assets/kids_wear.svg"
            },
            {
            "productID":5,
            "productName":"Skull Hoodie",
            "productCode":"HO-001",
            "releaseDate":"Mar 18, 2019",
            "description": "Skull Hoodie for winter",
            "price":780,
            "starRating":2.7,
            "imageUrl":"../assets/2240440.svg"
            },
    ]

    toggleImage():void {
        console.log('Value Of Show Image before click '+this.showImage);
        this.showImage = !this.showImage; //
        console.log('Value Of Show Image after click '+this.showImage);
    }

    
}