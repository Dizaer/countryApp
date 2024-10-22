import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1';

    constructor(private httpClient: HttpClient) { }

    public searchCountries( term: string, by: string ) {
        const url = `${ this.apiUrl }/${ by }/${ term }`
        return this.httpClient.get<Country[]>( url )
        .pipe(
            catchError( () => of([]) ),
            delay(2000)
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