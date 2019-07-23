import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SalonMeSharedModule } from 'app/shared';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

import {
  adminState,
  AuditsComponent,
  LogsComponent,
  JhiMetricsMonitoringComponent,
  JhiHealthModalComponent,
  JhiHealthCheckComponent,
  JhiConfigurationComponent,
  JhiDocsComponent,
  JhiTrackerComponent
} from './';

@NgModule({
  imports: [
    SalonMeSharedModule,
    /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    RouterModule.forChild(adminState)
  ],
  declarations: [
    AuditsComponent,
    LogsComponent,
    JhiConfigurationComponent,
    JhiHealthCheckComponent,
    JhiHealthModalComponent,
    JhiDocsComponent,
    JhiTrackerComponent,
    JhiMetricsMonitoringComponent
  ],
  entryComponents: [JhiHealthModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SalonMeAdminModule {}
