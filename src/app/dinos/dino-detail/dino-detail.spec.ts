declare let Zone: any;
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import DinoDetailsComponent from './dino-detail.component';
import reducer from '../reducer';

describe('My Component', () => {
  let component: DinoDetailsComponent;
  let fixture: ComponentFixture<DinoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        StoreModule.forRoot({
          reducer
        }),
        // other imports
      ],
      declarations: [
        DinoDetailsComponent,
        // other declarations
      ],
      providers: [
        // other providers
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DinoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});