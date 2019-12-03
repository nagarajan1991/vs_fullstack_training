import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ConvertToSpace'
})

export class ConvertToSpacesPipe implements PipeTransform{
    transform(value:string, character:string) {
        return value.replace(character, '@');
    }
}