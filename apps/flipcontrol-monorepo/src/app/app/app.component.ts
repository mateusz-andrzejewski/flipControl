import { Component, inject, OnInit } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';
import { Auth, signInAnonymously } from '@angular/fire/auth';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { MatButton } from '@angular/material/button';
import { MatBadge } from '@angular/material/badge';
import { MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    JsonPipe,
    AsyncPipe,
    MatButton,
    MatBadge,
    MatDialogContent,
    MatFormField,
    MatLabel,
    MatInput,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'FlipControl';

  auth = inject(Auth);
  firestore = inject(Firestore);
  store$ = inject(Store).select((state) => state);

  ngOnInit() {
    signInAnonymously(this.auth)
      .then(() => {
        console.log('✅ Połączono z Firebase Auth (anonimowo)');
      })
      .catch((err) => {
        console.error('❌ Błąd logowania do Firebase:', err);
      });

    const testRef = collection(this.firestore, 'test');
    getDocs(testRef)
      .then((snapshot) => {
        console.log(`✅ Połączono z Firestore, dokumentów: ${snapshot.size}`);
      })
      .catch((err) => {
        console.error('❌ Błąd połączenia z Firestore:', err);
      });
  }
}


