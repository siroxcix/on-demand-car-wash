import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AdminTokenInterceptorService } from './admin-token-interceptor.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NgForm } from '@angular/forms';
describe('AdminTokenInterceptorService', () => {
  let service: AdminTokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(AdminTokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
