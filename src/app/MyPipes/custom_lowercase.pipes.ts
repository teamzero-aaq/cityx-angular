import { Pipe, PipeTransform } from '@angular/core';
import { LowerCasePipe } from '@angular/common';

@Pipe({
  name: 'customLowercase',
})
export class CustomLowercasePipe implements PipeTransform {
  constructor(public lowercase: LowerCasePipe) {
  }
  transform(value: string, title: string): string {
    return this.lowercase.transform(`${title} ${value}`);
  }
}
