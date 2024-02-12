import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersListRegisterComponent } from './characters-list-register.component';

describe('CharactersListRegisterComponent', () => {
  let component: CharactersListRegisterComponent;
  let fixture: ComponentFixture<CharactersListRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersListRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharactersListRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
