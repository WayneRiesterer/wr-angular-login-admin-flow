import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [ ReactiveFormsModule ],
  exports: [ LoginComponent ],
  declarations: [ LoginComponent ]
})
export class AuthModule {}