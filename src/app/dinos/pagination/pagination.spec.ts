declare let Zone: any;
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import PaginationComponent from './pagination.component';
import reducer from '../reducer';
import DinoService from '../dinos.service';

describe('Pagination Component', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

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
        PaginationComponent,
        // other declarations
      ],
      providers: [
        // other providers
        DinoService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});