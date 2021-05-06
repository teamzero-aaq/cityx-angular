import { Component } from '@angular/core';

@Component({
  selector: 'app-join-name',
  template: `
    <div style="width:30%; margin: 0px 20px">
      <h5>Join Name</h5>
      <div class="form-group">
        <label for="FirstName">First Name</label>
        <input type="text" class="form-control" id="firstName" [(ngModel)]="first" />
      </div>
      <div class="form-group">
        <label for="LastName">Last Name</label>
        <input type="text" class="form-control" id="lastName" [(ngModel)]="last" />
      </div>
      <p class="text-info">Welcome {{first | joinName: last}} !!</p>
    </div>`,
})
export class JoinNameComponent {
  first = 'abdul';
  last = 'quadir Ansari';
}