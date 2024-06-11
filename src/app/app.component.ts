import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment , decrement, reset } from './store/actions/counter.actons';


interface AppState {
  count: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  count$: Observable<number>;
  
  constructor(private store: Store<AppState>){
    this.count$ = store.select('count')
  }

  increment() {
    this.store.dispatch(increment())
  }

  decrement() { 
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
