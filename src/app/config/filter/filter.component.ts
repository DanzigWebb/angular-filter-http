import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  @Output() onChange = new EventEmitter()

  formConfig = {
    vCPU: null,
    GPU: false,
    RAID: false,
    SSD: false
  };
  constructor() {}
  
  ngOnInit() {
    this.onChange.emit(this.formConfig)
  }
}
