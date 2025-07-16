import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButton } from '@flipcontrol-monorepo/ui';

@Component({
  selector: 'lib-login',
  imports: [CommonModule, UiButton],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {}
