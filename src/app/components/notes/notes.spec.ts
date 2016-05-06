import {
  it,
  describe,
  async,
  inject,
  beforeEachProviders
} from '@angular/core/testing';

import { TestComponentBuilder } from '@angular/compiler/testing';

import {Notes} from './notes';

describe('Notes Component', () => {

  beforeEachProviders(() => []);

  it('should ...', async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    tcb.createAsync(Notes).then((fixture) => {
      fixture.detectChanges();
    });
  })));

});
