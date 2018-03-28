import { Component, OnInit } from '@angular/core';
import { RiotApiService } from '../riot-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  reforgedRunes: Map<string, any>;

  constructor(public riotApiService: RiotApiService) { }

  ngOnInit() {
    this.riotApiService.fetchReforgedRunes().then((response) => {
        this.reforgedRunes = this.rearrangeRunes(response);
        console.debug(this.reforgedRunes);
    });
  }

  public getKeys(map) {
    if(!map) { return; }
    let keys = Array.from(map.keys());
    return keys;
  }

  public getRunes(runePath) {
    return this.reforgedRunes.get(runePath).runes;
  }

  private rearrangeRunes(runes) {
    const result = new Map();
    for (const rune of runes) {
      if (!result.has(rune.runePathName)) {
        result.set(rune.runePathName, { runes: [] });
      }
      result.get(rune.runePathName).runes.push(rune);
    }
    return result;
  }
}
