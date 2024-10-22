import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor( private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byName.countries;
    this.initialValue = this.countriesService.cacheStore.byName.term;
  }

  searchByName( term: string ){

    this.isLoading = true;


    this.countriesService.searchCountries(term, 'name')
    .subscribe( res => {
      this.countries = res;
      this.isLoading = false;
    });
  }
}
