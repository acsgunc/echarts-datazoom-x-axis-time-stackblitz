import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatazoomExampleComponent } from './datazoom-example.component';

describe('DatazoomExampleComponent', () => {
  let component: DatazoomExampleComponent;
  let fixture: ComponentFixture<DatazoomExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatazoomExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatazoomExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
