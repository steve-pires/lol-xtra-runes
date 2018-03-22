import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'League of Legends - Xtra Runes Pages!';

  public constructor() {
    // @Inject(DOCUMENT) private _document: Document) {
    // const bootloader = _document.getElementById('bootloader');
    // bootloader.parentNode.removeChild(bootloader);
  }
}
