import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate([{ outlets: { side: ['countriesside'] } }], { skipLocationChange: true });
  }

}
