import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RiseWithSAPComponent } from './pages/services/rise-with-sap/rise-with-sap.component';
import { GrowWithSAPComponent } from './pages/services/grow-with-sap/grow-with-sap.component';
import { NgModule } from '@angular/core';
import { IntegrationComponent } from './pages/services/integration/integration.component';
import { CustomerExperienceComponent } from './pages/services/customer-experience/customer-experience.component';
import { ImplementationCAPMFIORIABAPComponent } from './pages/services/implementation-capm-fiori-abap/implementation-capm-fiori-abap.component';
import { DataAnalyticsComponent } from './pages/services/data-analytics/data-analytics.component';
import { ERPComponent } from './pages/solutions/erp/erp.component';
import { BTPComponent } from './pages/solutions/btp/btp.component';
import { FAndAComponent } from './pages/solutions/f-and-a/f-and-a.component';
import { AutomotiveComponent } from './pages/industries/automotive/automotive.component';
import { EnergyComponent } from './pages/industries/energy/energy.component';
import { FinancialServicesComponent } from './pages/industries/financial-services/financial-services.component';
import { HealthCareComponent } from './pages/industries/health-care/health-care.component';
import { ManufacturingComponent } from './pages/industries/manufacturing/manufacturing.component';
import { CareerComponent } from './pages/career/career.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { BlogsComponent } from './pages/blogs/blogs.component';

import { SearchResultsComponent } from './search-results/search-results.component';

export const routes: Routes = [ 
    { path: '', component: HomeComponent },
    { path: 'services/rise-with-sap', component: RiseWithSAPComponent},
    { path: 'services/grow-with-sap', component: GrowWithSAPComponent },
    { path: 'services/integration', component: IntegrationComponent },
    { path: 'services/customer-experience', component: CustomerExperienceComponent},
    { path: 'services/implementation-capm-fiori-abap', component: ImplementationCAPMFIORIABAPComponent },
    { path: 'services/data-analytics', component: DataAnalyticsComponent },

    { path: 'solutions/btp', component: BTPComponent },
    { path: 'solutions/erp', component: ERPComponent },
    { path: 'solutions/f-and-a', component: FAndAComponent},

    { path: 'industries/automative', component: AutomotiveComponent },
    { path: 'industries/energy', component: EnergyComponent },
     { path: 'industries/financial-services', component: FinancialServicesComponent},
    { path: 'industries/health-care', component: HealthCareComponent },
    { path: 'industries/manufacturing', component: ManufacturingComponent },
     { path: 'career', component: CareerComponent },

      { path: 'blogs', component: BlogsComponent },

     { path: 'search', component: SearchResultsComponent }



];
@NgModule({
  imports: [RouterModule.forRoot(routes),SlickCarouselModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
