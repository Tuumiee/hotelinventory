import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigService } from '../services/config.service';
import { ShareddataService } from '../services/shareddata.service';

import { RoomsComponent } from './rooms.component';
import { RoomsService } from './services/rooms.service'
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { RouteConfigToken } from '../services/routeConfig.sevice';

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ RoomsComponent ],
      providers: [
        RoomsService,
        ConfigService, 
        ShareddataService,
        {
          provide: APP_SERVICE_CONFIG,
          useValue:{ apiEndpoint: "http://localhost:3000"}
        },
        {
          provide: RouteConfigToken,
          useValue: { title: 'rooms'}
        }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should togle', ()=> {
    component.hideRooms = false;
    component.toggle();
    expect(component.hideRooms).toBe(true);
  })
});
