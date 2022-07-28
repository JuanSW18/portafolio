import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'wc-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TextAreaComponent)
    }
  ]
})
export class TextAreaComponent implements ControlValueAccessor {

  counter: number = 0;
  value: string = '';
  hasErrors: boolean = false;
  errorMessage: string;
  isDisabled: boolean = false;

  @Input() label: string;
  @Input() maxChars: number;

  onChange = (value: any) => {};
  onTouched = () => {};

  constructor() { }

  getCounter(): number {
    return this.value?.length ?? 0;
  }

  writeValue(value: any): void {
    this.value = value;
  }
  
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  changeValue(): void{
    this.onChange(this.value);
  }

}
