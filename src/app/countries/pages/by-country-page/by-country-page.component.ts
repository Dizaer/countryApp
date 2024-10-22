import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor( private countriesService: CountriesService) {}

  searchByName( term: string ){

    this.isLoading = true;


    this.countriesService.searchCountries(term, 'name')
    .subscribe( res => {
      this.countries = res;
      this.isLoading = false;
    });
  }
}
