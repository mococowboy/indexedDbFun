import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadFormatComponent } from './load-format.component';

describe('LoadFormatComponent', () => {
  let component: LoadFormatComponent;
  let fixture: ComponentFixture<LoadFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadFormatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
