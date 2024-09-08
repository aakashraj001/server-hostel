import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import { ChampComponent } from './list/champ.component';
import { ChampDetailComponent } from './detail/champ-detail.component';
import { ChampUpdateComponent } from './update/champ-update.component';
import ChampResolve from './route/champ-routing-resolve.service';

const champRoute: Routes = [
  {
    path: '',
    component: ChampComponent,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: ChampDetailComponent,
    resolve: {
      champ: ChampResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: ChampUpdateComponent,
    resolve: {
      champ: ChampResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: ChampUpdateComponent,
    resolve: {
      champ: ChampResolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default champRoute;
