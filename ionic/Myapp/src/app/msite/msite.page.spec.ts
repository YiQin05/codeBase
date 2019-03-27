import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsitePage } from './msite.page';

describe('MsitePage', () => {
  let component: MsitePage;
  let fixture: ComponentFixture<MsitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
