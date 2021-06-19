import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadFormatComponent } from './load-format.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('LoadFormatComponent', () => {
  let component: LoadFormatComponent;
  let fixture: ComponentFixture<LoadFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadFormatComponent ],
      imports: [ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a truthy component', () => {
    expect(component).toBeTruthy();
  });

  it('should add another FormGroup when addFormGroupToArray is called', () => {
    expect(component.tokenArray.length).toBe(1);
    component.addFormGroupToArray();
    expect(component.tokenArray.length).toBe(2);
  });

  it('should remove a FormGroup when addFormGroupToArray is called', () => {
    component.addFormGroupToArray();
    expect(component.tokenArray.length).toBe(2);
    component.removeFormGroup();
    expect(component.tokenArray.length).toBe(1);
  });

});
