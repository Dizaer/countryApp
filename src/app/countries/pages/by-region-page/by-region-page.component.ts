import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor( private countriesService: CountriesService) {}

  searchByRegion( region: string ){
    
    this.isLoading = true;

    this.countriesService.searchCountries(region, 'region')
    .subscribe( res => {
      this.countries = res;
      this.isLoading = false;
    });
  }
}
