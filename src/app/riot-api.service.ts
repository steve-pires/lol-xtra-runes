import { Injectable } from '@angular/core';
import { RequestOptions, URLSearchParams, Response } from '@angular/http';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { api } from './riot-api.config';

@Injectable()
export class RiotApiService {

  public api: any = api;

  public constructor(public _httpClient: HttpClient) {
  }

  public fetchReforgedRunes() {
    const url: string = this.api.lol_static_data_v3 + this.api.sd_v3_endpoints.runes;
    // const options = { 
    //   headers: new HttpHeaders({
    //     'api_key': this.api.api_key
    //   })
    // };

    const params = new HttpParams().set('api_key', this.api.api_key);

    return this._httpClient.get(url, {params: params})
      .toPromise()
      .then(response => response)
      .catch((error) => {
        return error;
      });
  }
}
