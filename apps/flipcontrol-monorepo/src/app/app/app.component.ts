import { Component, inject, OnInit } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';
import { Auth, signInAnonymously } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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


