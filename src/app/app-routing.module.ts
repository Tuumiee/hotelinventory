import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {
    path: 'employee',
    loadChildren: () =>
      import('./employee/employee.module').then(m => m.EmployeeModule),
    canActivate: [LoginGuard],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'rooms',
    loadChildren: () =>
      import('./rooms/rooms.module').then(m => m.RoomsModule),
    canActivate: [LoginGuard],
    canLoad: [LoginGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'booking/:roomid',
    loadChildren: () =>
      import('./booking/booking.module').then(m => m.BookingModule),
   // canActivate: [LoginGuard],
  },
  { path: 'comment', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule) },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
