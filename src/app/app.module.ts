import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SensorListComponent } from './components/sensor-list/sensor-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterialModule } from './material.module';
import { SensorEffects } from './store/sensor/sensor.effects';
import { SensorReducer } from './store/sensor/sensor.reducer';
import {MatTooltipModule} from "@angular/material/tooltip";
import { SensorAddEditComponent } from './components/sensor-add-edit/sensor-add-edit.component';
import { AppEffects } from './store/common/app.effects';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { UserEffects } from './store/user/user.effects';
import { UserReducer } from './store/user/user.reducer';
import { MenubarComponent } from './components/menubar/menubar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HomeComponent } from './components/home/home.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SensorListComponent,
    UserListComponent,
    SensorAddEditComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([SensorEffects, AppEffects, UserEffects]),
    BrowserAnimationsModule,
    StoreModule.forRoot({sensor: SensorReducer, user: UserReducer}),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    MatTooltipModule,
    ReactiveFormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
