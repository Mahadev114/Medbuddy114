import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwProductDetailsComponent } from './veiw-product-details.component';

describe('VeiwProductDetailsComponent', () => {
  let component: VeiwProductDetailsComponent;
  let fixture: ComponentFixture<VeiwProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiwProductDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiwProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
