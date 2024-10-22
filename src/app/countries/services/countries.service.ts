import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1';
    public cacheStore: CacheStore = {
        byCapital: { term: '', countries: [] },
        byName: { term: '', countries: []},
        byRegion: { term: '', countries: []}
    }

    constructor(private httpClient: HttpClient) { }

    public searchCountries( term:any , by: string ) {
        const url = `${ this.apiUrl }/${ by }/${ term }`
        return this.httpClient.get<Country[]>( url )
        .pipe(
            tap( countries => {
                switch(by){
                    case 'capital':
                        this.cacheStore.byCapital = { term, countries }
                        break;
                    case 'name':
                        this.cacheStore.byName = { term, countries }
                        break;
                    case 'region':
                        this.cacheStore.byRegion = { term, countries }
                        break;
                }
            }),
            catchError( () => of([]) ),
            delay(300)
        );
    }
    
    searchCountryByAlphaCode( code: string ): Observable<Country | null> {
        return this.httpClient.get<Country[]>(`${ this.apiUrl }/alpha/${ code }`)
        .pipe(
            map( countries => countries.length > 0 ? countries[0]: null ),
            catchError( () => of(null) )
        );
    }
}