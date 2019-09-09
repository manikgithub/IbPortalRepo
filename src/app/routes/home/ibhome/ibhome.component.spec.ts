import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbhomeComponent } from './ibhome.component';

describe('IbhomeComponent', () => {
  let component: IbhomeComponent;
  let fixture: ComponentFixture<IbhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
