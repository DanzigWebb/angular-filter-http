import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prod-item',
  templateUrl: './prod-item.component.html',
  styleUrls: ['./prod-item.component.css']
})
export class ProdItemComponent implements OnInit {
  @Input() info:Object
  constructor() { }

  ngOnInit() {
  }

}