import { TestBed, inject } from '@angular/core/testing';

import { TwoTodoService } from './two-todo.service';

describe('TwoTodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwoTodoService]
    });
  });

  it('should be created', inject([TwoTodoService], (service: TwoTodoService) => {
    expect(service).toBeTruthy();
  }));
});
