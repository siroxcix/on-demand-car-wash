import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { OrderService } from './order.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NgForm } from '@angular/forms';
describe('OrderService', () => {
  let service: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(OrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
