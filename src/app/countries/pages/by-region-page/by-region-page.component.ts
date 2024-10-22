import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
  public selectedRegion?: Region;

  constructor( private countriesService: CountriesService) {}

  searchByRegion( region: Region ){
    
    this.selectedRegion = region;
    this.isLoading = true;

    this.countriesService.searchCountries(region, 'region')
    .subscribe( res => {
      this.countries = res;
      this.isLoading = false;
    });
  }
}
