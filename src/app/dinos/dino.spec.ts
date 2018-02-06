declare let Zone: any;
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StoreModule, Store } from '@ngrx/store';
import DinosComponent from './dinos.component';
import DinoService from './dinos.service';
import PaginationComponent from 'app/dinos/pagination/pagination.component';
import DinoDetailComponent from 'app/dinos/dino-detail/dino-detail.component';
import { AppState } from 'app/app.module';
import { EffectsModule } from '@ngrx/effects';
import DinoEffects from './effects/dino';
import dinoReducer from 'app/dinos/reducer';

describe('Dinos Component', () => {
  let component: DinosComponent;
  let fixture: ComponentFixture<DinosComponent>;
  let store: Store<AppState>;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        CommonModule,
        StoreModule.forRoot({ dinos: dinoReducer }),
        EffectsModule.forRoot([DinoEffects]),
        // other imports
      ],
      declarations: [
        DinoDetailComponent,
        DinosComponent,
        PaginationComponent
        // other declarations
      ],
      providers: [
        // other providers
        DinoService
      ]
    });

    httpMock = TestBed.get(HttpTestingController);

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(DinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created and have dispatched onInit fetch for photos', () => {
    const dinoRequest = httpMock.expectOne('https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=dinosaurs&sort=interestingness-desc&safe_search=2&media=photos&format=json&nojsoncallback=1&api_key=e57f52bb5ed3d0a7d33519e8b354799a&');
    expect(component).toBeTruthy();
    expect(dinoRequest).toBeDefined();
    expect(dinoRequest.request.method).toEqual('GET');

    httpMock.verify();
  });
  
});