import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent {
  @Input() iconName?: string;
  @Input() label?: string;
  @Input() placeholder?: string

  constructor() { }

}
