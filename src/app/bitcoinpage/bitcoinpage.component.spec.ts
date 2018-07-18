import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinpageComponent } from './bitcoinpage.component';

describe('BitcoinpageComponent', () => {
  let component: BitcoinpageComponent;
  let fixture: ComponentFixture<BitcoinpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
