import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'hnr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostListener('window:popstate', ['$event'])
  @HostListener('window:mousedown', [])
  onMouseDown() {
    document.body.classList.add('using-mouse');
    document.body.classList.remove('using-keyboard');
  }

  @HostListener('window:keydown.tab', [])
  @HostListener('window:keydown..shift. tab', [])
  onKeyDown() {
    document.body.classList.add('using-keyboard');
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        untilDestroyed(this)
      )
      .subscribe(() => window.scroll(0, 0));
  }
}
