import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

export enum ButtonVariant {
  TEXT = 'text',
  ELEVATED = 'elevated',
  OUTLINED = 'outlined',
  FILLED = 'filled',
  TONAL = 'tonal',
  ICON = 'icon',
  FAB = 'fab',
  MINI_FAB = 'mini-fab',
  EXTENDED_FAB = 'extended-fab',
}

export enum SeverityVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
  INFO = 'info',
}

@Component({
  selector: 'lib-ui-button',
  imports: [
    CommonModule,
    MatButton,
    MatProgressSpinner,
  ],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.scss',
})
export class UiButton {
  buttonVariant = ButtonVariant;
  severityVariant = SeverityVariant;

  variant = input<string>(this.buttonVariant.FILLED);
  severity = input<string>(this.severityVariant.PRIMARY);
  disabled = input(false);
  loading = input(false);
  link = input<string | undefined>();
  icon = input<string | undefined>();
}
