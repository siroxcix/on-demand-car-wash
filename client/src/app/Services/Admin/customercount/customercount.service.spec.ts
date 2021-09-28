import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { CustomercountService } from './customercount.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NgForm } from '@angular/forms';
describe('CustomercountService', () => {
  let service: CustomercountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(CustomercountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
