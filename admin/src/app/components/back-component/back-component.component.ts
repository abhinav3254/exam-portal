import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-component',
  templateUrl: './back-component.component.html',
  styleUrls: ['./back-component.component.scss']
})
export class BackComponentComponent {

  @Input() location: Location | undefined;

  goBack(): void {
    if (this.location != undefined) {
      this.location.back();
    }
  }

}
