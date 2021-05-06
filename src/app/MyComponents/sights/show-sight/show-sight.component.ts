import { Component, OnInit } from '@angular/core';
import { Sight } from 'src/app/sight';

@Component({
  selector: 'app-show-sight',
  templateUrl: './show-sight.component.html',
  styleUrls: ['./show-sight.component.css'],
})
export class ShowSightComponent implements OnInit {
  sights: Sight[];
  localItems: string;
  constructor() {
    this.localItems = localStorage.getItem('sights');
    if (this.localItems == null) {
      this.sights = [
        // {
        //   name: 'Name',
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
        //   description: 'Lorem ipsum',
        //   address: 'Address',
        //   city: 'Mumbai',
        //   price: 2000,
        // },
        // {
        //   name: 'Name2',
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
        //   description: 'Lorem ipsum',
        //   address: 'Address',
        //   city: 'Mumbai',
        //   price: 2000,
        // },
        // {
        //   name: 'Name3',
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
        //   description: 'Lorem ipsum',
        //   address: 'Address',
        //   city: 'Mumbai',
        //   price: 2000,
        // },
      ];
    }
    else {
      this.sights = JSON.parse(this.localItems);
    }
    
  }

  ngOnInit(): void { }
  
  AddSight(sight: Sight) {
    console.log(sight);
    this.sights.push(sight);
    localStorage.setItem('sights', JSON.stringify(this.sights));
  }
}
