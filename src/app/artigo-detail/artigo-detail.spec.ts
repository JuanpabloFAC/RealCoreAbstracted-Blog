import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoDetail } from './artigo-detail';

describe('ArtigoDetail', () => {
  let component: ArtigoDetail;
  let fixture: ComponentFixture<ArtigoDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtigoDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtigoDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
