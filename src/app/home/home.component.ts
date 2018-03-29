import { Component, OnInit } from '@angular/core';
import { RiotApiService } from '../riot-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  runesPaths: any;
  primaryRunePathId: any = '8200';
  secondaryRunePathId: any = '8300';

  constructor(public riotApiService: RiotApiService) { }

  ngOnInit() {
    this.riotApiService.fetchRunesPaths().then( (response) => {
      console.debug(response);
      this.runesPaths = response;
    });
  }

}
