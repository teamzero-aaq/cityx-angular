import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'appendString',
})
export class LocationPipe implements PipeTransform {
    transform(value: string, before: string): string {
        return `${before} ${value}`;
    }
}

