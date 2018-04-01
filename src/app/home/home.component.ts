import { Component, OnInit } from '@angular/core';
import { RiotApiService } from '../riot-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  runesPaths: any;
  primaryRunePath: any = '';
  secondaryRunePath: any = '';

  oldPrimaryRunePath: any  = '';
  oldSecondaryRunePath: any  = '';

  constructor(public riotApiService: RiotApiService) { }

  ngOnInit() {
    this.riotApiService.fetchRunesPaths().then( (response) => {
      // console.debug(response);
      this.runesPaths = response;
    });
  }

  onChangePrimaryRunePath() {
    if (this.primaryRunePath === this.secondaryRunePath) {
      this.secondaryRunePath = this.oldPrimaryRunePath;
    }
    this.oldPrimaryRunePath = this.primaryRunePath;
  }

  onChangeSecondaryRunePath() {
    if (this.secondaryRunePath === this.primaryRunePath) {
      this.primaryRunePath = this.oldSecondaryRunePath;
    }
    this.oldSecondaryRunePath = this.secondaryRunePath;
  }
}
