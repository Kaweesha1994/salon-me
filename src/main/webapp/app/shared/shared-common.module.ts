import { NgModule } from '@angular/core';

import { SalonMeSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [SalonMeSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [SalonMeSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SalonMeSharedCommonModule {}
