import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { WasherMyorderService } from './washer-myorder.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NgForm } from '@angular/forms';
describe('WasherMyorderService', () => {
  let service: WasherMyorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(WasherMyorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
