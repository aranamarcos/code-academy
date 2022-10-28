import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosAbmComponent } from './cursos-abm.component';

describe('CursosAbmComponent', () => {
  let component: CursosAbmComponent;
  let fixture: ComponentFixture<CursosAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosAbmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
