import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UserReducer } from './store/user.reducer';
import { CreateComponent } from './create.component';
import { ViewComponent } from './view.component';
import { environment } from '../environments/environment';
import {UserEffects} from './store/user.effects';
import { UpdateModalComponent } from './modals/update-modal.component';
import { ViewModalComponent } from './modals/view-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ViewComponent,
    UpdateModalComponent,
    ViewModalComponent,
  ],
  entryComponents:[
    UpdateModalComponent,
    ViewModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot({
      user: UserReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
