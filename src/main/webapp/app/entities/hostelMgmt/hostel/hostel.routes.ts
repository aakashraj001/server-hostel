import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import { HostelComponent } from './list/hostel.component';
import { HostelDetailComponent } from './detail/hostel-detail.component';
import { HostelUpdateComponent } from './update/hostel-update.component';
import HostelResolve from './route/hostel-routing-resolve.service';

const hostelRoute: Routes = [
  {
    path: '',
    component: HostelComponent,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: HostelDetailComponent,
    resolve: {
      hostel: HostelResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: HostelUpdateComponent,
    resolve: {
      hostel: HostelResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: HostelUpdateComponent,
    resolve: {
      hostel: HostelResolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default hostelRoute;
