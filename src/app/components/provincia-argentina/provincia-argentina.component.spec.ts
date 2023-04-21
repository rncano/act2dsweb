import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinciaArgentinaComponent } from './provincia-argentina.component';

describe('ProvinciaArgentinaComponent', () => {
  let component: ProvinciaArgentinaComponent;
  let fixture: ComponentFixture<ProvinciaArgentinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinciaArgentinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinciaArgentinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
