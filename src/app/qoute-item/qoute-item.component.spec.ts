import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QouteItemComponent } from './qoute-item.component';

describe('QouteItemComponent', () => {
  let component: QouteItemComponent;
  let fixture: ComponentFixture<QouteItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QouteItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QouteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
