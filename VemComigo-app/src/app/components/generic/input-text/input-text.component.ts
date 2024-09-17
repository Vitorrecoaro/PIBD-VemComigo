import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-generic-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent {
  @Input() iconName?: string;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() type: string = 'text';
  @Input() inputValue?: string;

  @Output() inputValueChange = new EventEmitter<string>();

  constructor() { }

  onValueChange(event: any) {
    this.inputValue = event.detail.value; // Atualiza o valor internamente
    this.inputValueChange.emit(this.inputValue); // Emite o valor para o componente pai
  }
}