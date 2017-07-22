import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteWordComponent } from './write-word.component';

describe('WriteWordComponent', () => {
  let component: WriteWordComponent;
  let fixture: ComponentFixture<WriteWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
