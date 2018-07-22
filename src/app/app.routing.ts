import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NoAccessComponent } from './noaccess/noaccess.component';
import { BodyComponent } from './body/body.component';
import { AdminAuthGuard } from './service/admin-auth-guard/admin-auth-guard.service';
import { AuthGuard } from './service/auth-guard/auth-guard.service';
import { MembersComponent } from './members/members.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '',
        component: HomeComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'member',
        component: MembersComponent,
        canActivate: [AuthGuard]
      }
      ],
    component: BodyComponent,
    canActivate: [AuthGuard]
  },
  { path: 'home',   redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'no-access', component: NoAccessComponent },
  { path: '**', component: NoAccessComponent},

    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);
