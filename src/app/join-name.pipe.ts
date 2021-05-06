import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'joinName' })
export class JoinNamePipe implements PipeTransform{
    transform(first: string, last: string): string{
        return first + " " +last;
    }
}

