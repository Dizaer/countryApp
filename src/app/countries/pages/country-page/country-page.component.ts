import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  constructor( 
    private activedRoute: ActivatedRoute,
    private router: Router, 
    private countryService: CountriesService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params
    .pipe(
      switchMap( ({ id }) => this.countryService.searchCountryByAlphaCode( id ) )
    )
    .subscribe(  country  => {

      if ( !country ) {
        return this.router.navigateByUrl('');
      }

      console.log('holla');
      return;
      
    });
  }
}
