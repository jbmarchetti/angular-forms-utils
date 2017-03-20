import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumselectComponent } from './enumselect.component';

describe('EnumselectComponent', () => {
  let component: EnumselectComponent;
  let fixture: ComponentFixture<EnumselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnumselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
