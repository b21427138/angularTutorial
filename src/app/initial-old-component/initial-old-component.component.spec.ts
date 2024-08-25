import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialOldComponentComponent } from './initial-old-component.component';

describe('InitialOldComponentComponent', () => {
  let component: InitialOldComponentComponent;
  let fixture: ComponentFixture<InitialOldComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialOldComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialOldComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
