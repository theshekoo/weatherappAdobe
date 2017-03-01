import {Component} from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent {

  type: string = null;
  size: string = 'large';

  change() {
    this.type = this.type === 'brand' ? null : 'brand';
    this.size = this.size === 'large' ? 'small' : 'large';
  }
}