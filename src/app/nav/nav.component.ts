import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private snackBar: MatSnackBar) {}

  dontDoThat(): void {
    this.snackBar.open('Why would you click on that? What\'s wrong with you?', 'Don\'t ask', { duration: 2500 });
  }

  cantClick(): void {
    this.snackBar.open('Can\'t click on me!', 'Yes I can!', { duration: 50 });
  }
}
