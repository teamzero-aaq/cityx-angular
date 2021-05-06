import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cityx';
  today_date = new Date(2021, 3, 31);
  toggle = 1;

  get format() { return this.toggle == 1 ? 'shortDate' : this.toggle == 2 ? 'longDate' : this.toggle == 3 ? 'fullDate' : 'full'; }

  toggle_format() { this.toggle < 4 ? this.toggle = this.toggle + 1 : this.toggle = 1 }
}
