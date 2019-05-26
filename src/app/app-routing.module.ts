import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';

const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}