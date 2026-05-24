import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIntrouvable } from './page-introuvable';

describe('PageIntrouvable', () => {
  let component: PageIntrouvable;
  let fixture: ComponentFixture<PageIntrouvable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageIntrouvable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageIntrouvable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
