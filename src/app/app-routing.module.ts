import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SensorListComponent} from "./components/sensor-list/sensor-list.component";
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HomeComponent } from './components/home/home.component';
import { SensorAddEditComponent } from './components/sensor-add-edit/sensor-add-edit.component';
import { authAdminGuard, authViewerAdminGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent
    , canActivate: [authViewerAdminGuard],
  },
  { path: 'sensors', component: SensorListComponent
    , canActivate: [authViewerAdminGuard]
  },
  { path: 'sensors/add', component: SensorAddEditComponent
    , canActivate: [authAdminGuard]
  },
  { path: 'sensors/edit/:id', component: SensorAddEditComponent
    , canActivate: [authAdminGuard]
  },
  { path: 'users', component: UserListComponent
    , canActivate: [authViewerAdminGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
