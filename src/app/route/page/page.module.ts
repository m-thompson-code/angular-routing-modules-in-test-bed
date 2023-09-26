import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('../test/test.module').then(m => m.TestModule)
      }
    ])
  ],
})
export class PageModule { }
