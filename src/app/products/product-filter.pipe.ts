import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product';
import { filter } from 'minimatch';

@Pipe({
 name: 'productFilter'
})
export class ProductsFilterPipe implements PipeTransform {
    transform(value: IProduct[], filterBy: string): IProduct[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase(): null;
        return filterBy ? 
        value.filter(
            (product: IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1): value;
    }

}