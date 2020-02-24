import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../http.service";

@Component({
  selector: "app-configuration",
  templateUrl: "./configuration.component.html",
  styleUrls: ["./configuration.component.css"]
})
export class ConfigurationComponent implements OnInit {
  data;
  params;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getData().subscribe(
      data => {
        this.data = [...data];
      },
      null,
      () => console.log(this.data)
    );
  }
  
  filtered(data) {
    let output = [...data]
    const { GPU, RAID, SSD, vCPU } = this.params;
    switch (true) {
      case GPU:
        output = output.filter(item => item.gpu);
      case RAID:
        output = output.filter(item => item.disk.count >= 2);
      case SSD:
        output = output.filter(item => item.disk.type === "SSD");
    }
    if (vCPU) output = output.filter(item => item.cpu.cores * item.cpu.count === vCPU);
    return output
  }
}
