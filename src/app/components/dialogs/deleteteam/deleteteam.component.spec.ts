import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteteamComponent } from './deleteteam.component';

describe('DeleteteamComponent', () => {
  let component: DeleteteamComponent;
  let fixture: ComponentFixture<DeleteteamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteteamComponent]
    });
    fixture = TestBed.createComponent(DeleteteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
