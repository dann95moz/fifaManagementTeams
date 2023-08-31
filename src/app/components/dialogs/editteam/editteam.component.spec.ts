import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditteamComponent } from './editteam.component';

describe('EditteamComponent', () => {
  let component: EditteamComponent;
  let fixture: ComponentFixture<EditteamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditteamComponent]
    });
    fixture = TestBed.createComponent(EditteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
