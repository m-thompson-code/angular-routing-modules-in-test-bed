import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { PageModule } from '../page/page.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';

@Component({
  selector: 'mock'
})
class MockComponent {}

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [
        PageModule,
        // Just importing the RouterTestingModule isn't enough
        // RouterTestingModule,
        // Trying to override routes doesn't work either
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: MockComponent,
          }
        ])
      ],
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

/**
 * Routing to lazy-loaded modules can cause this error
 */

  /**
   * 'Unhandled Promise rejection:', 'Type TestComponent is part of the declarations of 2 modules: DynamicTestModule and TestModule! Please consider moving TestComponent to a higher module that imports DynamicTestModule and TestModule.
   */
  it('should navigate (?)', (done) => {
    component.navigate().then(value => {
      expect(value).toBe(true);
      done();
    });
  });
});
