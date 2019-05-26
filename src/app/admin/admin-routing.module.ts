import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { CustomersComponent } from './customers/customers.component';

const ROUTES: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: '', redirectTo: 'users' },
    { path: 'users', component: UsersComponent },
    { path: 'customers', component: CustomersComponent }
  ]}
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {}