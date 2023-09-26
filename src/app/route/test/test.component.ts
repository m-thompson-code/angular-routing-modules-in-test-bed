import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  constructor(private readonly router: Router) {}

  navigate(): Promise<boolean> {
    return this.router.navigateByUrl('');
  }
}
