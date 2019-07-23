import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SalonMeSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [SalonMeSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [SalonMeSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SalonMeSharedModule {
  static forRoot() {
    return {
      ngModule: SalonMeSharedModule
    };
  }
}
