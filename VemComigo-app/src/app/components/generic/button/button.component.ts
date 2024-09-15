import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string = 'button';
  @Input() color: string = 'primary';
  @Input() className: string = ''; // Novo input para a classe

  constructor() {}
}
