import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provinces',
  templateUrl: './provinces.component.html',
  styleUrls: ['./provinces.component.css']
})
export class ProvincesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    this.route.navigate([{ outlets: { side: null }}]);
  }

}
