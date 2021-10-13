import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() pokes2 : any;
  constructor() { }

  ngOnInit(): void {
    console.log("pokes2", this.pokes2)
  }

}
