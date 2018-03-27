import { Component, OnInit } from '@angular/core';
import { RiotApiService } from '../riot-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  reforgedRunes: any[];

  constructor(public riotApiService: RiotApiService) { }

  ngOnInit() {
    this.riotApiService.fetchReforgedRunes().then((response) => {
        this.reforgedRunes = this.rearrangeRunes(response);
        console.debug(this.reforgedRunes);
    });
  }

  private rearrangeRunes(runes) {
    const result = [];
    for (const rune of runes) {
      if (!(rune.runePathName in result)) {
        result[rune.runePathName] = [];
      }
      result[rune.runePathName].push(rune);
    }
    return result;
  }
}
