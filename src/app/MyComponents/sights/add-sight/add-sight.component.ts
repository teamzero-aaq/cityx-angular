import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Sight } from 'src/app/sight';

@Component({
  selector: 'app-add-sight',
  templateUrl: './add-sight.component.html',
  styleUrls: ['./add-sight.component.css'],
})
export class AddSightComponent implements OnInit {
  name?: string;
  imgUrl?: string;
  description?: string;
  address?: string;
  city?: string;
  price?: number;

  @Output() AddSight: EventEmitter<Sight> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    console.log(form);
    const sight = {
      name: this.name,
      imgUrl:this.imgUrl,
      description: this.description,
      address: this.address,
      city: this.city,
      price: this.price,
    };
    this.AddSight.emit(sight);
  }
}
