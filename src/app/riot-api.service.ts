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
    const url: string = this.api.sd_v3_endpoints.runes;
    const params = this.getUrlParams();
    return this.genericJsonGet(url, params);
  }

  public fetchRunesPaths() {
    const url: string = this.api.sd_v3_endpoints.runes_paths;
    const params = this.getUrlParams();
    return this.genericJsonGet(url, params);
  }

  private getUrlParams() {
    const params = new HttpParams()
      .set('locale', this.api.locale_fr)
      .set('api_key', this.api.api_key);
    return params;
  }

  private genericJsonGet(url: string, params: HttpParams) {
    return this._httpClient.get(url, {params: params})
      .toPromise()
      .then(response => response)
      .catch((error) => {
        return error;
      });
  }
}
